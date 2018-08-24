const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());


issueToken();

async function issueToken() {
    let account = 'hexlantalex1';
    // await eos.transaction(account, tr => {
    //     tr.create(account, '10000.000 HEX');
    //     tr.issue(account, '10.000 HEX', 'issue');
    // });

    const options = {authorization: account};
    const accountContract = await eos.contract(account);
    
    await accountContract.create(account, '10000.000 HEX', options);
    await accountContract.issue(account, '10.000 HEX', 'issue', options);

    const balance = await eos.getCurrencyBalance(account, account, 'HEX');
    console.log('Currency Balance', balance);
}



