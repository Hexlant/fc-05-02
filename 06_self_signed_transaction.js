const Eos = require('eosjs');
const eosConfig = require('./config.js');
const DecimalPad = Eos.modules.format.DecimalPad;
let eos = Eos(eosConfig.getConfig());

pushTransactionTest();

async function pushTransactionTest() {
    let expireInSeconds = 60 * 2 // 2 min
    let info = await eos.getInfo({});

    // 현재 블록의 시간을 가져와서 Date 형으로 변환
    chainDate = new Date(info.head_block_time + 'Z');

    // 현재 블록의 시간 + 사용자가 설정한 트랜잭션 유효 시간 
    expiration = new Date(chainDate.getTime() + expireInSeconds * 1000); // ms 단위이기 때문에 * 1000을 합니다. 

    // 2018-08-23T19:53:51.000Z -> 2018-08-23T19:53:51 로 변환
    expiration = expiration.toISOString().split('.')[0];

    // 이 값을 바꿔보세요.
    expiration = '2018-08-28T00:38:14';
    console.log(info.head_block_time);

    block = await eos.getBlock(info.last_irreversible_block_num);

    console.log(block);

    transactionHeaders = {
        expiration,
        ref_block_num: info.last_irreversible_block_num & 0xFFFF,
        ref_block_prefix: block.ref_block_prefix
    };

    console.log(transactionHeaders);

    eos = Eos({httpEndpoint: null, chainId: eosConfig.getConfig().chainId, keyProvider: '5KdYMpUHN36Rednstkidd1qPgLTgtMrRhPAisbjg4ymjsWbQLKY', transactionHeaders: transactionHeaders});
    transfer = await eos.transfer('lazylion5555', 'lazylion1231', '7.0000 EOS', '');
    transferTransaction = transfer.transaction;
    
    console.log(transferTransaction);

    eos = Eos(eosConfig.getConfig());
    processedTransaction = await eos.pushTransaction(transferTransaction);
    console.log(processedTransaction);
}