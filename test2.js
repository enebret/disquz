const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/0f4ea603a23c4cb6b82c934201968316"))
async function vb() {
    const signature = await web3.eth.sign("Hello world", "0x4683735758db31cf1228f6a417c2b6b1618f0a67");
    console.log(signature)
}
vb()