import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x139Bf7d632DFD49F146016C0c565e6f16A535A13"
);

export default instance;
