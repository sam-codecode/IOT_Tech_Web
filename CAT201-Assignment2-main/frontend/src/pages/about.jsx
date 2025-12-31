import React from 'react';

const About = () => {
    return (
        <div>
            {/* SECTION TITLE */}
            <h2 className="section-title">About<span className="highlight"> CodeFusion</span></h2>

            {/* 1. MAIN DESCRIPTION CARD */}
            <div className="glass-card" style={{ marginBottom: '40px', borderLeft: '4px solid #7000ff' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', margin: 0 }}>
                    CodeFusion is a student-driven IoT solutions group founded by Computer Science students
                    with a focus on building intelligent and sustainable systems. We apply core computing
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
                    <h4 style={{ margin: '0 0 10px 0' }}>Code Intelligence</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Deep understanding of software logic, algorithms, and system architecture to design scalable and efficient digital solutions.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="glass-card">
                    <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⚙️</div>
                    <h4 style={{ margin: '0 0 10px 0' }}>Smart Applications</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Developing meaningful IoT solutions that address real-world challenges through practical design and intelligent system integration.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="glass-card">
                    <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🚀</div>
                    <h4 style={{ margin: '0 0 10px 0' }}>High Performance</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
                        Optimized systems engineered for speed, reliability, uptime, and consistent performance across real-world operational environments.
                    </p>
                </div>
            </div>

            {/* 3. OUR GOAL SECTION */}
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <div className="glass-card" style={{ display: 'inline-block', border: '1px solid #00f3ff' }}>
                    <h4 style={{ color: '#00f3ff', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Goal</h4>
                    <p style={{ fontSize: '1.2rem', color: '#fff', marginTop: '10px' }}>
                        " To transform ideas and academic insight into smart, connected, and impactful technology-driven solutions."
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;
