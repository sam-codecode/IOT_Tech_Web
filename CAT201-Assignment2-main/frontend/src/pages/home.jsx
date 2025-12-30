import React from 'react';

const Home = () => {
    return (
        <>
            {/* ====================
          SECTION 1: HERO
      ==================== */}
            <div className="hero-container">

                {/* --- VIDEO AREA START --- */}
                <video autoPlay loop muted playsInline className="video-bg">
                    <source src="/assets/videos/iot.mp4" type="video/mp4" />
                </video>
                {/* --- VIDEO AREA END --- */}

                <div className="hero-overlay">

                    {/* === LOGO HOLDER === */}
                    <div className="hero-logo-circle" style={{ overflow: 'hidden' }}>
                        <img
                            src="/assets/images/TALENT SHOW IG TEMPLATE.png"
                            alt="CSNode Logo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                display: 'block',
                                /* THIS IS THE FIX: Scales the image up by 15% to touch the borders */
                                transform: 'scale(2)'
                            }}
                        />
                    </div>

                    {/* === BADGE === */}
                    <span className="hero-badge">
            CAT201 • EST 2025
          </span>

                    <h1 className="hero-title">
                        THE FUTURE OF <br />
                        <span style={{color: '#00f3ff'}}>CONNECTED</span> INTELLIGENCE
                    </h1>

                    <p className="hero-subtitle">
                        CSNode bridges the gap between academic theory and real-world IoT automation.
                        Built by Computer Science students.
                    </p>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator">
                        <p>SCROLL TO EXPLORE</p>
                        <div className="scroll-line"></div>
                    </div>
                </div>
            </div>

            {/* ====================
          SECTION 2: VISION & MISSION
      ==================== */}
            <section className="vm-section">
                <div className="vm-container">

                    {/* VISUAL DIVIDER */}
                    <div className="section-header">
                        <span className="section-tag">CSNODE_MANIFESTO</span>
                        <h2 className="vm-main-title">CORE <span style={{color: '#bc13fe'}}>PROTOCOL</span></h2>
                    </div>

                    <div className="vm-grid">

                        {/* --- VISION CARD --- */}
                        <div className="vm-card vision-card">
                            <div className="card-icon-glow">🌐</div>
                            <h3>VISION</h3>
                            <p className="vm-text">
                                To become a student-driven IoT innovation group that transforms
                                Computer Science knowledge into practical, impactful smart solutions
                                for real-world challenges.
                            </p>

                            <div className="vm-tags">
                                <span className="tag">✔ Short</span>
                                <span className="tag">✔ Academic</span>
                                <span className="tag glow-purple">✔ Not corporate cringe</span>
                            </div>
                        </div>

                        {/* --- MISSION CARD --- */}
                        <div className="vm-card mission-card">
                            <div className="card-icon-glow" style={{color: '#bc13fe'}}>🎯</div>
                            <h3>MISSION</h3>
                            <ul className="mission-list">
                                <li>
                                    <span className="cmd-arrow">></span>
                                    <strong>Design & Develop</strong> reliable IoT systems using strong CS fundamentals.
                                </li>
                                <li>
                                    <span className="cmd-arrow">></span>
                                    <strong>Integrate</strong> hardware, software, and data into functional connected solutions.
                                </li>
                                <li>
                                    <span className="cmd-arrow">></span>
                                    <strong>Apply</strong> real-time data automation for better decision-making.
                                </li>
                                <li>
                                    <span className="cmd-arrow">></span>
                                    <strong>Bridge</strong> academic learning with real-world applications.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;