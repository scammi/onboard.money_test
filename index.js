import { App } from '@onboardmoney/sdk';
import apiKey from './apiKey.js';

const apikey = apiKey;
const network = 'goerli';
const onboardmoney = new App(apikey, `https://${network}.onboard.money`);
const address = '0x334031dfE663Ea7fDDf0daa9E79C855Ce57cf6C6';

const user2 = '0x236594D267577AB9A1e71e6150BAcB4331F05604';
const user1 = '0x99815b61dDC1ADf850AB4d91F437E79f24660377';

async function balance() {
  // Fetch application ETH balance and address for gas payments
  const { balance, relayAddress } = await onboardmoney.balance();
  console.log(balance);
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
  const userAddress = user1;
  const batch = {
    txs: [
      {
        from: user1,
        to: '0x5b2554112Ce698B023CC7fF4EB27eAd0e3fad019',
        // value: 50000000000000,
        // gasLimit: '100000',
      },
    ],
  }
  const txReceipt = await onboardmoney.sendBatch(batch);
  console.log(userAddress);
}
async function evaluateBatch() {
  const userAddress = user1;
  const batch = {
    txs: [
      {
        from: userAddress,
        to: '0x5b2554112Ce698B023CC7fF4EB27eAd0e3fad019',
        // value: 5000000000000000,
        // gasLimit: '100000',
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
