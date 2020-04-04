const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: "1000000" });

    await factory.methods
        .createCampaign("100")
        .send({ from: accounts[0], gas: "1000000" });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); //ES6 campaignAddress[0] = [campaignAddress]

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    ); //already deployed at campaignAddress thus no need to send and deploy
});

describe("Capaigns", () => {
    it("deploys a factory and a campaign", () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it("Marks caller as manager", async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(manager, accounts[0]);
    });

    it("Allows people to contribute", async () => {
        await campaign.methods.Contribute().send({
            value: "200",
            from: accounts[1]
        });
        const r = await campaign.methods.contributors(accounts[1]).call();
        assert.equal(true, r);
    });
});
