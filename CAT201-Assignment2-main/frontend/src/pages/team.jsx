import React from 'react';

const Team = () => {
    return (
        <div>
            <h2 className="section-title">Meet The <span className="highlight">Team</span></h2>

            {/* Changed class to "team-grid" to match the CSS provided earlier */}
            <div className="team-grid">

                {/* Poshentiran */}
                <div className="glass-card team-member">
                    <img
                        src="/assets/images/posh.jpeg"
                        alt="Poshentiran"
                        className="avatar-placeholder"
                        style={{ objectFit: 'cover' }}
                    />
                    <h3>Poshentiran</h3>
                    <p style={{ color: '#00f3ff', fontWeight: 'bold' }}>IoT Systems Lead</p>
                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>System architecture, device integration, deployment.</p>
                </div>

                {/* Samuel */}
                <div className="glass-card team-member">
                    <img
                        src="/assets/images/samuel.jpeg"
                        alt="Samuel Raj"
                        className="avatar-placeholder"
                        style={{ objectFit: 'cover' }}
                    />
                    <h3>Samuel Raj</h3>
                    <p style={{ color: '#00f3ff', fontWeight: 'bold' }}>Backend & Cloud Developer</p>
                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Server logic, APIs, and data processing.</p>
                </div>

                {/* Salman */}
                <div className="glass-card team-member">
                    <img
                        src="/assets/images/salman.jpeg"
                        alt="Salman"
                        className="avatar-placeholder"
                        style={{ objectFit: 'cover' }}
                    />
                    <h3>Salman</h3>
                    <p style={{ color: '#00f3ff', fontWeight: 'bold' }}>Frontend Developer</p>
                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Dashboards, interfaces, and visualization.</p>
                </div>
            </div>

            <div style={{ marginTop: '80px', textAlign: 'center' }}>
                <h3 className="section-title">Contact Us</h3>
                <div className="glass-card" style={{ display: 'inline-block', textAlign: 'left', padding: '30px' }}>
                    <p style={{ marginBottom: '10px' }}><strong>Email:</strong> codefusion.team@gmail.com</p>
                    <p style={{ marginBottom: '10px' }}><strong>Location:</strong> Universiti Sains Malaysia (USM)</p>
                    <p style={{ color: '#aaa', marginTop: '15px' }}>
                        We welcome academic collaborations and project partnerships.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;
