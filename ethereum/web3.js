import Web3 from "web3";

let web3;

//  const web3 = new Web3(window.web3.currentProvider); //sinse our code is runniing first on nextjs server and then going to our browser, window.web3 is not defined

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //User is running metamask
    web3 = new Web3(window.web3.currentProvider);
} else {
    //User is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/970e5313fe8340bf822cc30f38c44c22"
    );
    web3 = new Web3(provider);
}

export default web3;
