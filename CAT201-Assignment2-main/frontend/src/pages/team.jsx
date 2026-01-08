import React from 'react';

const Team = () => {
    return (
        <section className="team-section" id="team">
            <div className="team-header">
                <span className="section-tag">/ HUMAN_RESOURCES /</span>
                <h2 className="section-title">
                    Core <span className="highlight">Operatives</span>
                </h2>
            </div>

            <div className="team-grid-advanced">

                {/* Member 1: Poshentiran */}
                <div className="cyber-card">
                    <div className="cyber-img-box">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/posh.jpeg`}
                            alt="Poshentiran"
                            className="cyber-img"
                        />
                        <div className="scan-line"></div>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="cyber-content">
                        <div className="cyber-header">
                            <h3>Poshentiran</h3>
                            <span className="cyber-role">IoT Lead</span>
                        </div>
                        <p className="cyber-desc">
                            Architecting neural networks for device ecosystems and hardware integration.
                        </p>

                        <div className="skill-matrix">
                            <div className="skill-tag">System Arch</div>
                            <div className="skill-tag">Embedded C</div>
                            <div className="skill-tag">Hardware</div>
                        </div>
                    </div>
                </div>

                {/* Member 2: Samuel Raj */}
                <div className="cyber-card">
                    <div className="cyber-img-box">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/samuel.jpeg`}
                            alt="Samuel Raj"
                            className="cyber-img"
                        />
                        <div className="scan-line delay-1"></div>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="cyber-content">
                        <div className="cyber-header">
                            <h3>Samuel Raj</h3>
                            <span className="cyber-role highlight-purple">Backend & Cloud</span>
                        </div>
                        <p className="cyber-desc">
                            Engineering server-side logic, API gateways, and scalable cloud infrastructure.
                        </p>

                        <div className="skill-matrix">
                            <div className="skill-tag purple">Node.js</div>
                            <div className="skill-tag purple">AWS/Cloud</div>
                            <div className="skill-tag purple">Database</div>
                        </div>
                    </div>
                </div>

                {/* Member 3: Salman */}
                <div className="cyber-card">
                    <div className="cyber-img-box">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/salman.jpeg`}
                            alt="Salman"
                            className="cyber-img"
                        />
                        <div className="scan-line delay-2"></div>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="cyber-content">
                        <div className="cyber-header">
                            <h3>Salman</h3>
                            <span className="cyber-role">Frontend Dev</span>
                        </div>
                        <p className="cyber-desc">
                            Crafting immersive user interfaces and reactive visualization dashboards.
                        </p>

                        <div className="skill-matrix">
                            <div className="skill-tag">React.js</div>
                            <div className="skill-tag">UI/UX</div>
                            <div className="skill-tag">Animation</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
