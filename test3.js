const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/0f4ea603a23c4cb6b82c934201968316"))
/**web3.eth.getBalance("0x4683735758db31cf1228f6a417c2b6b1618f0a67", function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(web3.fromWei(result, "ether") + " ETH")
    }
  }) */
  
  //let result = web3.isAddress("0x4683735758db31cf1228f6a417c2b6b1618f0a67")
 
  msg = web3.sha3('message')
  signature = web3.eth.sign("0x4683735758db31cf1228f6a417c2b6b1618f0a67", msg)
  console.log(signature)