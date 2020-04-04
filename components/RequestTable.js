import React from "react";
import { Table, Button } from "semantic-ui-react";

import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestTable extends React.Component {
    onApprove = async (index) => {
        console.log(index);
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        await campaign.methods
            .approveRequest(index)
            .send({ from: accounts[0] });
    };
    onFinalise = async (index) => {
        console.log(index);
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        await campaign.methods
            .finalizeRequest(index)
            .send({ from: accounts[0] });
    };

    render() {
        const { Header, Row, HeaderCell, Body, Cell } = Table;
        const { requests, requestCount, contributorsCount } = this.props;
        // console.log(this.props);
        return (
            <Table>
                <Row>
                    <HeaderCell>ID</HeaderCell>
                    <HeaderCell>Description</HeaderCell>
                    <HeaderCell>Amount</HeaderCell>
                    <HeaderCell>Recipient</HeaderCell>
                    <HeaderCell>Approval Count</HeaderCell>
                    <HeaderCell>Approve</HeaderCell>
                    <HeaderCell>Finalise</HeaderCell>
                </Row>

                {requests.map((request, index) => {
                    const readyToFinalise =
                        request.approvalCount > contributorsCount / 2;

                    return (
                        <Row
                            disabled={request.complete}
                            positive={readyToFinalise && !request.complete}
                        >
                            <Cell>{index + 1}</Cell>
                            <Cell>{request.desc}</Cell>
                            <Cell>
                                {web3.utils.fromWei(request.value, "ether")}
                            </Cell>
                            <Cell>{request.receipt}</Cell>
                            <Cell>
                                {request.approvalCount}/{contributorsCount}
                            </Cell>
                            <Cell>
                                {request.complete ? null : (
                                    <Button
                                        onClick={this.onApprove.bind(
                                            this,
                                            index
                                        )}
                                        color="green"
                                        basic
                                    >
                                        Approve
                                    </Button>
                                )}
                            </Cell>
                            <Cell>
                                {request.complete ? null : (
                                    <Button
                                        onClick={this.onFinalise.bind(
                                            this,
                                            index
                                        )}
                                        color="teal"
                                        basic
                                    >
                                        Finalise
                                    </Button>
                                )}
                            </Cell>
                        </Row>
                    );
                })}
            </Table>
        );
    }
}

export default RequestTable;
