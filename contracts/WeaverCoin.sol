pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract WeaverCoin is ERC20, ERC20Detailed {
  string public constant NAME = 'WeaverCoin';
  string public constant SYMBOL = 'WEAV';
  uint8 public constant DECIMALS = 8;
  uint constant TOTAL_SUPPLY = 300;

  constructor () public ERC20Detailed(NAME, SYMBOL, DECIMALS){
    _mint(msg.sender, TOTAL_SUPPLY);
  }
}
