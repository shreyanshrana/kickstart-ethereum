import React from "react";
import Layout from "../../../components/Layout";
import { Button, Table, Message } from "semantic-ui-react";
import { Link } from "../../../routes";
import RequestTable from "../../../components/RequestTable";
import Campaign from "../../../ethereum/campaign";

class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        const campaign = Campaign(address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        const requestCount = await campaign.methods.getRequestCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call();
                })
        );

        return {
            address,
            requests,
            requestCount,
            contributorsCount: summary[3],
        };
    }
    render() {
        console.log(this.props);
        return (
            <Layout>
                <h1>Request List</h1>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated="right"
                            style={{ margin: "10px" }}
                        >
                            Create Request
                        </Button>
                    </a>
                </Link>
                <RequestTable
                    requests={this.props.requests}
                    requestCount={this.props.requestCount}
                    address={this.props.address}
                    contributorsCount={this.props.contributorsCount}
                />

                <Message info>
                    Found {this.props.requestCount} request(s)
                </Message>
            </Layout>
        );
    }
}

export default RequestIndex;
