const Factory = artifacts.require("UniswapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let token1Address, token2Address;
  if (network === 'mainnet') {
     token1Address = '';
     token2Address = '';
  } else {
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);

    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();

     token1Address = token1.address;
     token2Address = token2.address;
  }

  await factory.createPair(token1Address, token2Address);
};

// uniswap = 0x28E87B76d645aBF7FCe0Ed4dCeB649326c059b2E
// token1 = 0xe0d15F3BD517B0E78eee673b97a1939C4f51bebb
// token2 = 0xF4CE0a3aa6EFf98bD56d1e781Cc3eCa8dAB73544
