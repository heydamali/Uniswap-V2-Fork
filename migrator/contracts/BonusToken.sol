pragma solidity =0.6.6;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract BonusToken is ERC20 {
  address public admin;
  address public liquidator;
  constructor() ERC20('Bonus Token', 'BTk') public {
    admin = msg.sender;
  }

  function setLiquidator(address _liquidator) external {
    require(msg.sender == admin, 'Bonus Token: Only Admin');
    liquidator = _liquidator;
  }

  function mint(address to, uint amount) external {
    require(msg.sender == liquidator, 'Bonus Token: Only Liquidator');
    _mint(to, amount);
  }
}
