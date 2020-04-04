import React from "react";
import Layout from "../../../components/Layout";
import { Form, Input, Button, Message } from "semantic-ui-react";

import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";
import { Link } from "../../../routes";

class RequestNew extends React.Component {
    state = {
        descValue: "",
        amountValue: "",
        recipientValue: "",
        loading: false,
        errorMessage: ""
    };
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }
    createRequest = async event => {
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: ""
        });
        const accounts = await web3.eth.getAccounts();
        const campaign = await Campaign(this.props.address);
        try {
            await campaign.methods
                .createRequest(
                    this.state.descValue,
                    web3.utils.toWei(this.state.amountValue),
                    this.state.recipientValue
                )
                .send({
                    from: accounts[0]
                });
        } catch (err) {
            this.setState({
                errorMessage: err.message,
                loading: false
            });
        }

        this.setState({
            loading: false
        });
    };
    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h1>Create new request</h1>
                <Form
                    onSubmit={this.createRequest}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label>Description of the request</label>
                        <Input
                            value={this.state.descValue}
                            onChange={event =>
                                this.setState({ descValue: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Amount required(in ether)</label>
                        <Input
                            value={this.state.amountValue}
                            onChange={event =>
                                this.setState({
                                    amountValue: event.target.value
                                })
                            }
                            label="ether"
                            labelPosition="right"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient of the request</label>
                        <Input
                            value={this.state.recipientValue}
                            onChange={event =>
                                this.setState({
                                    recipientValue: event.target.value
                                })
                            }
                            placeholder="Address of the recipient"
                        />
                    </Form.Field>
                    <Message
                        error
                        header="Something went wrong"
                        content={this.state.errorMessage}
                    />
                    <Button primary loading={this.state.loading}>
                        Create Request
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;
