import React, { useState } from 'react';

const Services = () => {
    // 1. Service Data
    const services = [
        {
            id: "01",
            title: "IoT System Integration",
            icon: "🔗",
            desc: "We merge hardware, cloud platforms, and software into one unified ecosystem. Seamless communication between sensors and servers."
        },
        {
            id: "02",
            title: "Custom IoT Development",
            icon: "🛠️",
            desc: "Tailored solutions for unique business needs. From PCB design to firmware and frontend dashboards."
        },
        {
            id: "03",
            title: "Real-Time Analytics",
            icon: "📊",
            desc: "Live data visualization systems. Turn raw sensor data into actionable insights with AI-driven predictions."
        },
        {
            id: "04",
            title: "Smart Automation",
            icon: "🤖",
            desc: "Trigger actions automatically based on sensor thresholds. Reduce human error and increase operational efficiency."
        },
        {
            id: "05",
            title: "Maintenance & Support",
            icon: "🛡️",
            desc: "24/7 system monitoring, security patching, and over-the-air (OTA) updates to keep your IoT network secure."
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