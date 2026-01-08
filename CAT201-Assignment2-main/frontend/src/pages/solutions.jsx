import React, { useState, useRef } from 'react';

const Solutions = () => {
    const products = [
        {
            id: 1,
            title: "Nexus Home Hub",
            category: "SMART HOME",
            desc: "Central control unit for residential automation.",
            features: ["Zigbee 3.0 & Wi-Fi 6", "Voice Control", "120 Device Capacity", "Offline Processing"],
            img: `${process.env.PUBLIC_URL}/assets/images/homehub.png`
        },
        {
            id: 2,
            title: "InduSensor Pro X",
            category: "INDUSTRIAL IIoT",
            desc: "Heavy-duty vibration and temperature sensor.",
            features: ["IP68 Waterproof", "5-Year Battery Life", "LoRaWAN Support", "-40°C to 85°C Ops"],
            img: `${process.env.PUBLIC_URL}/assets/images/indusensor.png`
        },
        {
            id: 3,
            title: "EcoTrack Energy",
            category: "SUSTAINABILITY",
            desc: "Real-time power consumption analyzer.",
            features: ["Voltage Monitoring", "AI Waste Detection", "Cloud Dashboard", "Mobile Alerts"],
            img: `${process.env.PUBLIC_URL}/assets/images/ecoenergy.png`
        },
        {
            id: 4,
            title: "Asset Tag Mini",
            category: "TRACKING",
            desc: "Ultra-low power GPS tracker for logistics.",
            features: ["Global GPS/GLONASS", "Motion Activation", "Magnetic Mount", "Anti-Tamper Alert"],
            img: `${process.env.PUBLIC_URL}/assets/images/assettag.png`
        },
        {
            id: 5,
            title: "AirGuard Sentinel",
            category: "ENVIRONMENT",
            desc: "Precision air quality monitor.",
            features: ["CO2 & PM2.5 Sensors", "Humidity Tracking", "Auto-Ventilation Link", "Data Logging"],
            img: `${process.env.PUBLIC_URL}/assets/images/airguard.png`
        }
    ];

    const [activeProduct, setActiveProduct] = useState(products[0]);
    const specSectionRef = useRef(null);

    const handleViewSpecs = (product) => {
        setActiveProduct(product);
        specSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleNext = () => {
        const i = products.findIndex(p => p.id === activeProduct.id);
        setActiveProduct(products[(i + 1) % products.length]);
    };

    const handlePrev = () => {
        const i = products.findIndex(p => p.id === activeProduct.id);
        setActiveProduct(products[(i - 1 + products.length) % products.length]);
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="section-title">
                    SMART IOT <span className="highlight">PRODUCTS</span>
                </h2>
                <p style={{ color: '#888' }}>
                    Hardware and software solutions engineered for the connected future.
                </p>
            </div>

            <div className="team-grid">
                {products.map(item => (
                    <div key={item.id} className="glass-card" style={{ padding: '20px' }}>
                        <div style={{
                            height: '180px',
                            borderRadius: '10px',
                            marginBottom: '15px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255,255,255,0.05)'
                        }}>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <h3 style={{ color: 'white' }}>{item.title}</h3>

                        <button className="view-specs-btn" onClick={() => handleViewSpecs(item)}>
                            View Specs
                        </button>
                    </div>
                ))}
            </div>

            <div ref={specSectionRef} className="spec-viewer-container">
                <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '80px' }}>
                    TECHNICAL <span className="highlight-purple">SPECIFICATIONS</span>
                </h3>

                <div className="carousel-wrapper">
                    <button className="nav-btn left" onClick={handlePrev}>&#10094;</button>

                    <div className="glowing-spec-card" key={activeProduct.id}>
                        <div className="spec-image-box">
                            <span className="model-badge">MODEL-0{activeProduct.id}</span>
                            <img
                                src={activeProduct.img}
                                alt={activeProduct.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="spec-details">
                            <h2>{activeProduct.title}</h2>
                            <span className="spec-category">{activeProduct.category}</span>
                            <p>{activeProduct.desc}</p>

                            <div className="feature-list">
                                {activeProduct.features.map((f, i) => (
                                    <span key={i} className="feature-tag">{f}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="nav-btn right" onClick={handleNext}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
