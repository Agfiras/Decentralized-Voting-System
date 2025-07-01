import React, { useState } from 'react';

const ProposalForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description.trim()) return;
        onSubmit({ description });
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <label style={{ fontWeight: 500 }}>Description
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Proposal description"
                    required
                    style={{ width: '100%', minHeight: 60, borderRadius: 8, border: '1px solid #e0e0e0', padding: 10, fontSize: 16 }}
                />
            </label>
            <button type="submit" style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 18, cursor: 'pointer', marginTop: 10 }}>
                Create Proposal
            </button>
        </form>
    );
};

export default ProposalForm; 