import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";

import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends React.Component {
    state = {
        minimumContribution: "",
        errorMessage: "",
        loading: false
    };
    onSubmit = async event => {
        event.preventDefault();

        try {
            this.setState({
                loading: true,
                errorMessage: ""
            });
            const accounts = await web3.eth.getAccounts();
            // console.log(accounts);
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute("/");
        } catch (err) {
            this.setState({
                errorMessage: err.message
            });
        }
        this.setState({
            loading: false
        });
    };
    render() {
        return (
            <Layout>
                <h2>Create new campaign</h2>
                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            placeholder="Amount in wei"
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({
                                    minimumContribution: event.target.value
                                })
                            }
                        />
                    </Form.Field>

                    <Message
                        error
                        header="Something went wrong"
                        content={this.state.errorMessage}
                    />
                    <Button primary loading={this.state.loading}>
                        Create
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
