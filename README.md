## UNISWAP V2 FORK
This project is a fork of two Uniswap DEX smart contract; The Factory smart contract (core) and the Router smart contract (periphery). It uses Truffle to handle contract deployment since the Uniswap codebase does not make any provision for that.

### Deployment
To deploy this project, you will have to do that separately for each smart contract. Start with the Factory contract as it's deployment address is needed to deploy the router contract. Navigate into the root of either folder run `truffle migrate --reset --network dashbaord` assuming you're using the [truffle dashboard feature](https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard.html).

Remember to modify `periphery/migrations/2_initial_migration.js` to use the correct Factory contract address.

### Liquidity Attack
This project uses the same liquidity attack concept used by Sushiswap to attack the liquidity of Uniswap DEX. The code for the liquidity attack can be found in the `migrator` folder.
