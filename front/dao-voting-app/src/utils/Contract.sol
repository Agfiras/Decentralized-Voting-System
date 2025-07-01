// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    address public owner;
    uint public proposalCount;

    struct Proposal {
        uint id;
        string description;
        uint forVotes;
        uint againstVotes;
        bool closed;
        mapping(address => bool) voters;
    }

    mapping(uint => Proposal) public proposals;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier proposalExists(uint _id) {
        require(_id > 0 && _id <= proposalCount, "Proposal does not exist");
        _;
    }

    function createProposal(string memory _description) public onlyOwner {
        proposalCount++;
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.id = proposalCount;
        newProposal.description = _description;
        newProposal.closed = false;
    }

    function vote(uint _id, bool support) public proposalExists(_id) {
        Proposal storage p = proposals[_id];
        require(!p.closed, "Proposal is closed");
        require(!p.voters[msg.sender], "Already voted");

        p.voters[msg.sender] = true;
        if (support) {
            p.forVotes++;
        } else {
            p.againstVotes++;
        }
    }

    function closeProposal(uint _id) public onlyOwner proposalExists(_id) {
        Proposal storage p = proposals[_id];
        require(!p.closed, "Already closed");
        p.closed = true;
    }

    function getProposal(uint _id) public view proposalExists(_id) returns (
        string memory desc,
        uint forV,
        uint againstV,
        bool closed
    ) {
        Proposal storage p = proposals[_id];
        return (p.description, p.forVotes, p.againstVotes, p.closed);
    }
}
