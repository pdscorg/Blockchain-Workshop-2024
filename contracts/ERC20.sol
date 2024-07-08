// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract ERC20 {

    mapping (address=>uint) balance;
    uint private _totalSupply;
    string private _name;
    string private _symbol;
    uint8 private _decimals;



    constructor( string memory name, string memory symbol, uint8 decimals, uint256 totalSupply) {
        _name=name;
        _symbol=symbol;
        _decimals=decimals;
        _mint(msg.sender,totalSupply);
    }

    function _mint(address owner,uint totalSupply) internal  {
        balance[owner]=totalSupply;
        _totalSupply=totalSupply;
    }

    function transfer(address to, uint amount ) public {
        require(balance[msg.sender]>amount,"Insufficient balance");
        balance[msg.sender]-=amount; 
        balance[to]+=amount;   
    }
 
}