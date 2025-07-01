import React, { useEffect, useState } from 'react';
import ProposalForm from './components/ProposalForm';
import {
  getProposals,
  createProposal,
  voteOnProposal,
  closeProposal,
  getContract
} from './utils/eth';
import Lottie from 'lottie-react';
import toasterAnimation from './assets/toaster.json';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VotingCard from './components/VotingCard';
import Footer from './components/Footer';

function App() {
  const [account, setAccount] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [owner, setOwner] = useState(null);
  const [colorPhase, setColorPhase] = useState(0);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [votingId, setVotingId] = useState(null);

  // Animate the color of 'Matters' between green and blue
  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase(phase => (phase + 1) % 200);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Calculate color
  const green = [17, 171, 104];
  const blue = [55, 75, 223];
  const t = 0.5 * (1 + Math.sin((colorPhase / 200) * 2 * Math.PI));
  const r = Math.round(green[0] * (1 - t) + blue[0] * t);
  const g = Math.round(green[1] * (1 - t) + blue[1] * t);
  const b = Math.round(green[2] * (1 - t) + blue[2] * t);
  const mattersColor = `rgb(${r},${g},${b})`;

  // Connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        setError('Wallet connection rejected');
      }
    } else {
      setError('MetaMask not detected');
    }
  };

  // Fetch proposals on mount and when account changes
  useEffect(() => {
    async function fetchProposalsList() {
      try {
        const data = await getProposals();
        setProposals(data);
      } catch (e) {
        setProposals([]);
      }
    }
    fetchProposalsList();
  }, [account]);

  // Create proposal
  const handleCreateProposal = async ({ description }) => {
    setLoading(true);
    setError('');
    try {
      await createProposal(description);
      // Add a short delay to allow blockchain state to update
      await new Promise(res => setTimeout(res, 1000));
      await fetchProposals();
    } catch (err) {
      setError(err?.message || 'Failed to create proposal');
    } finally {
      setLoading(false);
    }
  };

  // Vote
  const handleVote = async (id, support) => {
    setVotingId(id);
    setLoading(true);
    try {
      await voteOnProposal(id, support);
      // Refresh proposals after voting
      const data = await getProposals();
      setProposals(data);
    } catch (e) {
      // Optionally handle error
    } finally {
      setLoading(false);
      setVotingId(null);
    }
  };

  // Close proposal
  const handleClose = async (id) => {
    setLoading(true);
    setError('');
    try {
      await closeProposal(id);
      await fetchProposals();
    } catch (err) {
      setError(err?.message || 'Failed to close proposal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: 'radial-gradient(ellipse at top left, #23262f 60%, #181a20 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header onConnect={connectWallet} account={account} />
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <HeroSection onCreatePoll={() => setShowProposalModal(true)} />
        <section style={{ maxWidth: 1100, width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 800, margin: '32px 0 24px 0', textAlign: 'center' }}>Available Proposals</h2>
          {proposals.length === 0 ? (
            <div style={{ color: '#aaa', textAlign: 'center', fontSize: 18 }}>No proposals available.</div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              columnGap: 32,
              rowGap: 24,
              marginLeft: 60,
              justifyContent: 'center',
            }}>
              {proposals.map((proposal) => (
                <VotingCard
                  key={proposal.id}
                  image={'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'}
                  title={proposal.description}
                  forVotes={proposal.forVotes}
                  againstVotes={proposal.againstVotes}
                  address={proposal.id}
                  onVote={(support) => handleVote(proposal.id, support)}
                  loading={loading && votingId === proposal.id}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      {showProposalModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{ background: '#23262f', borderRadius: 16, padding: 32, minWidth: 340, boxShadow: '0 2px 24px rgba(0,0,0,0.18)', position: 'relative' }}>
            <button onClick={() => setShowProposalModal(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }}>&times;</button>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 22, marginBottom: 18 }}>Create Proposal</h2>
            <ProposalForm onSubmit={async (data) => {
              await handleCreateProposal(data);
              setShowProposalModal(false);
            }} />
          </div>
        </div>
      )}
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
        }}>
          <div style={{ width: 300, background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Lottie animationData={toasterAnimation} loop={true} style={{ width: 300, height: 300 }} />
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 24, marginTop: 24 }}>Validating transaction...</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 