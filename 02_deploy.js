const Eos = require('eosjs');
const fs = require('fs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());




// https://developers.eos.io/eosjs/v1.0/reference#gettablerows

delpoy();

async function delpoy() {
    let account = 'hexlantalex1'
    wasm = fs.readFileSync(__dirname + '/eosio.token_example.wasm');
    abi = fs.readFileSync(__dirname + '/eosio.token_example.abi');

    // Publish contract to the blockchain
    await eos.setcode(account, 0, 0, wasm).then(
        result => {
            console.log(result);
        }
    );
    await eos.setabi(account, JSON.parse(abi)).then(
        result => {
            console.log(result);
        }
    );
}
