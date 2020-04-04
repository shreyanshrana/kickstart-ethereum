import React from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
// import "semantic-ui-css";

class Home extends React.Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }
    renderCampaigns = () => {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    };
    render() {
        return (
            <Layout>
                <div>
                    <h1>Open Campaigns</h1>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                content="Create Campaign"
                                icon="add circle"
                                primary
                                floated="right"
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default Home;
