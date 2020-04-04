const HDWalletProivder = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProivder(
    "loop avocado find fortune debris arrange soup often ability egg gap protect",
    "https://rinkeby.infura.io/v3/970e5313fe8340bf822cc30f38c44c22"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
        .deploy({
            data: compiledFactory.bytecode
        })
        .send({ gas: "1000000", from: accounts[0] });
    console.log("Contract deployed to : ", result.options.address);
};

deploy();

//0xD35792CCd10D4853973c3cEeF5fEf3566FF2868C <- contract address
