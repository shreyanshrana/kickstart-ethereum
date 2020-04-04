pragma solidity ^0.4.17;


contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
    struct Request {
        string desc;
        uint256 value;
        address receipt;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint256 public minContribution;
    mapping(address => bool) public contributors; //people who have contributed
    Request[] public requests;
    uint256 public contributorsCount = 0;

    modifier checkManager() {
        require(manager == msg.sender);
        _;
    }

    function getSummary()
        public
        view
        returns (uint256, uint256, uint256, uint256, address)
    {
        return (
            minContribution,
            this.balance,
            requests.length,
            contributorsCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint256) {
        return requests.length;
    }

    function Campaign(uint256 min, address managerAddress) public {
        manager = managerAddress;
        minContribution = min;
    }

    function Contribute() public payable {
        require(msg.value > minContribution);
        contributors[msg.sender] = true;
        contributorsCount++;
    }

    function createRequest(string desc, uint256 value, address receipt)
        public
        checkManager
    {
        Request memory newReq = Request({
            desc: desc,
            value: value,
            receipt: receipt,
            complete: false,
            approvalCount: 0
        });
        requests.push(newReq);
    }

    function approveRequest(uint256 index) public {
        require(contributors[msg.sender]);
        require(!requests[index].approvals[msg.sender]);

        requests[index].approvals[msg.sender] = true;
        requests[index].approvalCount++;
    }

    function finalizeRequest(uint256 index) public checkManager {
        require(!requests[index].complete);
        require((requests[index].approvalCount) > contributorsCount / 2);

        requests[index].complete = true;
        requests[index].receipt.transfer(requests[index].value);
    }
}
