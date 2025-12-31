import React, { useState } from 'react';

const Services = () => {
    // 1. Service Data
    const services = [
        {
            id: "01",
            title: "IoT System Integration",
            icon: "🔗",
            desc: "We integrate hardware, cloud platforms, and software into a unified ecosystem, ensuring reliable communication between sensors, servers, and user-facing applications."
        },
        {
            id: "02",
            title: "Custom IoT Development",
            icon: "🛠️",
            desc: "We develop customized IoT solutions tailored to specific requirements, covering hardware design, embedded firmware, backend services, and intuitive frontend dashboards."
        },
        {
            id: "03",
            title: "Real-Time Analytics",
            icon: "📊",
            desc: "We design real-time data monitoring and visualization systems that transform raw sensor data into meaningful insights for informed decision-making."
        },
        {
            id: "04",
            title: "Smart Automation",
            icon: "🤖",
            desc: "We implement intelligent automation that triggers system actions based on sensor conditions, improving efficiency, accuracy, and responsiveness across connected environments."
        },
        {
            id: "05",
            title: "Maintenance & Support",
            icon: "🛡️",
            desc: "We provide continuous system monitoring, timely updates, and security maintenance to ensure long-term reliability and protection of IoT infrastructures."
        }
    ];

    // 2. State to track which card is expanded (Default to first one)
    const [activeId, setActiveId] = useState("01");

    return (
        <div className="services-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 className="section-title">OUR <span className="highlight">SERVICES</span></h2>
                <p style={{ color: '#888' }}>Hover over a card to explore our capabilities.</p>
            </div>

            {/* 3. The Elastic Accordion Container */}
            <div className="accordion-container">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`accordion-card ${activeId === service.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveId(service.id)}
                    >
                        {/* Background Number (Visual Effect) */}
                        <span className="bg-number">{service.id}</span>

                        {/* Content Wrapper */}
                        <div className="card-content">
                            <div className="icon-box">
                                {service.icon}
                            </div>

                            <h3 className="service-title">
                                {service.title}
                            </h3>

                            {/* Only visible when active */}
                            <div className={`service-desc ${activeId === service.id ? 'show' : ''}`}>
                                <p style={{ marginBottom: 0 }}>{service.desc}</p>
                                {/* Button Removed Here */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
