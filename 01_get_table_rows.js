const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

// https://developers.eos.io/eosjs/v1.0/reference#gettablerows
let params = {
    'json': true,                   // json 변환 여부
    "table_key": "account",         // primary key
    "scope": "lazylion5555",        // account name
    "code": "lazylion5555",         // smart contract name
    "table": "sale",                // table name
    "lower_bound": 0,
    "upper_bound": 10,
    "limit": 10
}

eos.getTableRows(params).then(
    result => {
        console.log(result);
    }
);

