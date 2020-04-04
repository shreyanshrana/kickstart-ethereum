import React from "react";
import Layout from "../../components/Layout";
import ContributeForm from "../../components/ContributeForm";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";
import { Card, Grid, Button } from "semantic-ui-react";

class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            address: props.query.address,
            minContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            contributorsCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards() {
        const {
            balance,
            manager,
            minContribution,
            requestsCount,
            contributorsCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: "Address of manager",
                description: "Address of the manager who created this campaign",
                style: { overflowWrap: "break-word" }
            },
            {
                header: minContribution,
                meta: "Minimum Contribution (wei)",
                description:
                    "You must contribute at least this much wei to become a contributor"
            },
            {
                header: requestsCount,
                meta: "Number of requests",
                description:
                    "A request tries to withdraw money from the balance by the manager"
            },
            {
                header: contributorsCount,
                meta: "People who have contributed",
                description:
                    "Number of people who have pledged to this campaign"
            },
            {
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Balance left (wei)",
                description: "Balance left for requests"
            }
        ];
        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <h1>CampaignShow</h1>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link
                                route={`/campaigns/${this.props.address}/requests`}
                            >
                                <Button primary>View Requests</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;
