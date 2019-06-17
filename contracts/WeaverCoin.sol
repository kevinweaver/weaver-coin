pragma solidity >=0.4.21 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract WeaverCoin is ERC20 {
    string public name = "WeaverCoin";
    string public symbol = "WC";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 100;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
