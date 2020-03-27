const app = require('./app');
const { connect } = require('./database');

async function main() {
    //Database connection
    await connect();

    //Express Aplication
   await app.listen(4000);
   console.log('server on port 4000: Connected'); 
}

main();