const Router = artifacts.require("UniswapV2Router02.sol")
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0x28E87B76d645aBF7FCe0Ed4dCeB649326c059b2E'

  if (network === 'mainnet') {
    weth = WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
};
