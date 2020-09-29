import { App } from '@onboardmoney/sdk';
import apiKey from './apiKey.js';

const apikey = apiKey;
const network = 'goerli';
const onboardmoney = new App(apikey, `https://${network}.onboard.money`);
const address = '0x711D96a560f72A048bDc64D87526249a82aB5D02';

async function balance() {
  // Fetch application ETH balance and address for gas payments
  const { balance, relayAddress } = await onboardmoney.balance();
  console.log(balance);
}

async function deploy() {
  const { appAddress } = await onboardmoney.deploy();
  console.log(appAddress);
}

async function createUser() {
  const { userAddress } = await onboardmoney.createUser();
  console.log(userAddress);
}

async function get_policy() {
  const { policy } = await onboardmoney.getPolicy();
  console.log(policy);
}

async function createTrx() {
  const userAddress = '0xdCD3a7aEf5994b731Cc90395894fD4475dD6AdFd'
  const batch = {
    txs: [
      {
        from: userAddress,
        to: '0x5b2554112Ce698B023CC7fF4EB27eAd0e3fad019',
        value: 5000000000000000,
        gasLimit: '100000',
      },
    ],
  }
  const txReceipt = await onboardmoney.sendBatch(batch);
  console.log(userAddress);
}
async function evaluateBatch() {
  const userAddress = '0xdCD3a7aEf5994b731Cc90395894fD4475dD6AdFd'
  const batch = {
    txs: [
      {
        from: userAddress,
        to: '0x5b2554112Ce698B023CC7fF4EB27eAd0e3fad019',
        value: 5000000000000000,
        gasLimit: '100000',
      },
    ],
  }
  const { success } = await onboardmoney.evaluateBatch(batch)
}

var arg = process.argv.slice(2);

switch (arg[0]) {
  case 'balance':
    balance().catch((error) => {console.log(error); })
    break;
  case 'deploy':
    deploy().catch((error) => {console.log(error); })
    break;
  case 'createUser':
    createUser().catch((error) => {console.log(error); })
    break;
  case 'get_policy':
    get_policy().catch((error) => {console.log(error); })
    break;
  case 'createTrx':
    createTrx().catch((error) => {console.log(error); })
    break;
  case 'evaluateBatch':
    evaluateBatch().catch((error) => {console.log(error); })
    break;
}

//   deploy().catch((error) =>{
//     console.log(error);
//   })

//   balance().catch((error) => {
//     console.log(error);
//   });

// createUser().catch((error) => {
//     console.log(error);
// });

// get_policy().catch((error)=> {
//     console.log(error);
// })

// createTrx().catch((error)=> {
//     console.log(error);
// })

// evaluateBatch().catch((error)=> {
//     console.log(error);
// })
