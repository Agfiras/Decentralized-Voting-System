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
                <label style={{ fontWeight: 500, color: '#fff', marginBottom: 8 }}>Description
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter your proposal description..."
                    required
                    style={{ 
                        width: '100%', 
                        minHeight: 60, 
                        borderRadius: 8, 
                        border: '1px solid #4a5568', 
                        padding: 10, 
                        fontSize: 16,
                        backgroundColor: '#2d3748',
                        color: '#e2e8f0',
                        resize: 'none',
                        marginTop: 12
                    }}
                />
            </label>
            <button type="submit" style={{ 
                background: '#fff', 
                color: '#000', 
                border: 'none', 
                borderRadius: 18, 
                padding: '12px 24px', 
                fontWeight: 600, 
                fontSize: 18, 
                cursor: 'pointer', 
                marginTop: 10,
                width: 'auto',
                alignSelf: 'center'
            }}>
                Publish Proposal
            </button>
        </form>
    );
};

export default ProposalForm; 