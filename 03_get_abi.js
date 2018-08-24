const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

let account = 'hexlantalex1';

// abi 확인
eos.getAbi(account).then(result => {
    console.log(JSON.stringify(result, undefined, 2));
});