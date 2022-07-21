//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Points{

    uint pid;
    bool loyalty = false;

    struct Program{
        uint pid;
        string name;
        address owner;
        string reward;
        string multiplier;
    }

    struct Customer{
        address customer;
        address owner;
        uint point;
        bool loyalty;
    }

    mapping(uint => Program)public merchants; 
    mapping(address => mapping(uint => Program)) public programs;
    mapping(address => mapping(uint => Customer)) public customers;

    function addProgram(string memory _name, string memory _reward, string memory _multiplier)public{
        ++pid;
        programs[msg.sender][pid]=Program(pid,_name,msg.sender,_reward,_multiplier);
    }

    function approveCustomer(uint _pid) public {
        customers[msg.sender][_pid]=Customer(msg.sender,merchants[_pid].owner,0,true);
    }

    function addPoint(uint _pid, uint _upoint) public {
        customers[msg.sender][_pid].point += _upoint;
    }

    function redeemPoint(uint _pid, uint _pused) public{
        customers[msg.sender][_pid].point -= _pused;
    }
}