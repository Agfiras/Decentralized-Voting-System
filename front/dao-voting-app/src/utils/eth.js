import { ethers } from "ethers";
import contractABI from "../assets/voting.json";

const contractAddress = "0xE2186D428A5aF5358d18A1221C355c34ffFe1C63";

export async function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
}

export async function getProposals() {
    const contract = await getContract();
    const count = await contract.proposalCount();
    const proposals = [];
    for (let i = 1; i <= Number(count); i++) {
        try {
            const p = await contract.proposals(i);
            // Only include if the proposal exists, is not closed, and description is not empty
            if (p.description && p.description !== "" && !p.closed) {
                proposals.push({
                    id: p.id?.toString?.() ?? i.toString(),
                    description: p.description,
                    forVotes: Number(p.forVotes),
                    againstVotes: Number(p.againstVotes),
                    closed: p.closed,
                });
            }
        } catch (e) {
            // Proposal does not exist at this index, skip
            continue;
        }
    }
    return proposals;
}

export async function getProposal(id) {
    const contract = await getContract();
    const p = await contract.getProposal(BigInt(id));
    return {
        desc: p.desc,
        forV: Number(p.forV),
        againstV: Number(p.againstV),
        closed: p.closed,
    };
}

export async function createProposal(description) {
    const contract = await getContract();
    const tx = await contract.createProposal(description);
    await tx.wait();
}

export async function voteOnProposal(id, support) {
    const contract = await getContract();
    const tx = await contract.vote(BigInt(id), support);
    await tx.wait();
}

export async function closeProposal(id) {
    const contract = await getContract();
    const tx = await contract.closeProposal(BigInt(id));
    await tx.wait();
} 