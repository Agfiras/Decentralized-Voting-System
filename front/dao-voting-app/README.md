# BlueVotes - Decentralized Voting App

A modern, decentralized voting application built with React, Ethers.js, and a Solidity smart contract. BlueVotes allows users to create proposals and vote securely on the blockchain, with a beautiful, responsive UI.

## Features
- Create new proposals (polls) via a modal form
- View all open proposals in a clean card grid
- Vote "Yes" or "No" on proposals directly from the UI
- See live vote counts for each proposal
- Connect wallet with MetaMask
- Responsive, modern design

## Tech Stack
- **Frontend:** React (Vite), Ethers.js
- **Smart Contract:** Solidity (see `src/utils/Contract.sol`)
- **Wallet:** MetaMask
- **Styling:** Inline styles, SF Pro font

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MetaMask browser extension
- Access to an Ethereum testnet (e.g., Goerli)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/dao-voting-app.git
   cd dao-voting-app/front/dao-voting-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure the Smart Contract:**
   - Deploy the Solidity contract (`src/utils/Contract.sol`) to your preferred Ethereum testnet (e.g., using Remix or Hardhat).
   - Copy the deployed contract address and update it in `src/utils/eth.js`:
     ```js
     const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
     ```
   - If you change the contract, update the ABI in `src/assets/voting.json`.

4. **Run the app locally:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## Usage
- Connect your MetaMask wallet.
- Click "Create poll" to open the proposal modal and submit a new proposal.
- View all open proposals as cards.
- Vote "Yes" or "No" on any proposal. The vote count updates live after your transaction is confirmed.
- Only open proposals are shown. Closed proposals are hidden.
```


---

**YourVotes** — Your voice, on-chain.
