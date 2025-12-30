import React from 'react';

const About = () => {
    return (
        <div>
            {/* SECTION TITLE */}
            <h2 className="section-title">About <span className="highlight">CSNode</span></h2>

            {/* 1. MAIN DESCRIPTION CARD */}
            <div className="glass-card" style={{ marginBottom: '40px', borderLeft: '4px solid #7000ff' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', margin: 0 }}>
                    CSNode is a student-driven IoT solutions group founded by Computer Science students
                    with a focus on building intelligent, connected systems. We apply core computing
                    principles to design reliable IoT products that bridge hardware and software effectively.
                </p>
            </div>

            {/* 2. WHAT DEFINES US (GRID) */}
            <h3 style={{ fontFamily: 'Roboto Mono', color: '#00f3ff', marginBottom: '20px' }}>
                What Defines Us
            </h3>

            <div className="grid-container">
                {/* Card 1 */}
                <div className="glass-card">
                    <div style={{ fontSize: '2rem', marginBottom: '15px' }}>💻</div>
                    <h4 style={{ margin: '0 0 10px 0' }}>CS Concepts</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Strong foundation in Computer Science concepts and architecture.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="glass-card">
                    <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⚙️</div>
                    <h4 style={{ margin: '0 0 10px 0' }}>Real-World Use</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Focus on functional, real-world IoT use cases and applications.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="glass-card">
                    <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🚀</div>
                    <h4 style={{ margin: '0 0 10px 0' }}>Performance</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Emphasis on system reliability, uptime, and performance.
                    </p>
                </div>
            </div>

            {/* 3. OUR GOAL SECTION */}
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <div className="glass-card" style={{ display: 'inline-block', border: '1px solid #00f3ff' }}>
                    <h4 style={{ color: '#00f3ff', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Goal</h4>
                    <p style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px' }}>
                        "To translate academic computing knowledge into impactful IoT solutions."
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;