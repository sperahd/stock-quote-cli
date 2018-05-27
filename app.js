'use strict';

const userArgs = process.argv;
const stockQuote = require('stock-quote');
if(userArgs.length < 3) {
    console.log('USAGE: node app.js <scrip_id> [exchange]');
    console.log('Check https://github.com/sperahd/stock-quote-cli/blob/master/README.md for details');
}

stockQuote.getQuote(userArgs[2], userArgs[3])
.then((response) => {
    console.log(JSON.stringify(response, null, 4));
})
.catch((reject) => {
    if(reject === 404) {
        console.log(`Wrong Scrip id ${userArgs[2]} or incorrect exchange ${userArgs[3]}}`);
    }
});

