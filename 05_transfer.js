const Eos = require('eosjs');
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());
const DecimalPad = Eos.modules.format.DecimalPad;

// transfer 
let fromAccount = 'lazylion5555';		// 보낼 계정
let toAccount = 'lazylion1231';		// 받을 계정
let amount = 1;						// 보낼 수량
let memo = 'memo';					// 메모
let symbol = 'EOS';					// 보낼 심볼
// 보낼 수량의 경우 수량(소수점 포함) + 심볼을 포함하여 보내야 한다. ex) 1.0000 EOS
let amountPayload = DecimalPad(amount, 4) + ' ' + symbol; 

eos.transfer(fromAccount, toAccount, amountPayload, memo)
.then(result => {
    console.log(result);
});