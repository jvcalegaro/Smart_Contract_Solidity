// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JCToken is ERC20, ERC20Burnable, Ownable {
    
    uint amountStartMint = 1000 * 10 ** decimals();
    string coinName = "JCToken";
    string coinSymbol = "JCTK";
    address walletReceive = address(0xcA58Ac98783f10EEFAfA0BeCFF34e58674C15423);
    address walletOwner = msg.sender;
    
    constructor() ERC20(coinName, coinSymbol) {
        _mint(walletReceive, amountStartMint);
        _mint(walletOwner, amountStartMint);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}