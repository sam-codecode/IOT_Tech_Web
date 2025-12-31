import React, { useState, useRef } from 'react';

const Solutions = () => {
    // 1. Define the Products Data with IMAGES
    const products = [
        {
            id: 1,
            title: "Nexus Home Hub",
            category: "SMART HOME",
            desc: "Central control unit for residential automation.",
            features: ["Zigbee 3.0 & Wi-Fi 6", "Voice Control", "120 Device Capacity", "Offline Processing"],
            // Make sure this file exists in public/assets/images/
            img: "/assets/images/homehub.png"
        },
        {
            id: 2,
            title: "InduSensor Pro X",
            category: "INDUSTRIAL IIoT",
            desc: "Heavy-duty vibration and temperature sensor.",
            features: ["IP68 Waterproof", "5-Year Battery Life", "LoRaWAN Support", "-40°C to 85°C Ops"],
            img: "/assets/images/indusensor.png" // Corrected .ong to .png
        },
        {
            id: 3,
            title: "EcoTrack Energy",
            category: "SUSTAINABILITY",
            desc: "Real-time power consumption analyzer.",
            features: ["Voltage Monitoring", "AI Waste Detection", "Cloud Dashboard", "Mobile Alerts"],
            img: "/assets/images/ecoenergy.png"
        },
        {
            id: 4,
            title: "Asset Tag Mini",
            category: "TRACKING",
            desc: "Ultra-low power GPS tracker for logistics.",
            features: ["Global GPS/GLONASS", "Motion Activation", "Magnetic Mount", "Anti-Tamper Alert"],
            img: "/assets/images/assettag.png"
        },
        {
            id: 5,
            title: "AirGuard Sentinel",
            category: "ENVIRONMENT",
            desc: "Precision air quality monitor.",
            features: ["CO2 & PM2.5 Sensors", "Humidity Tracking", "Auto-Ventilation Link", "Data Logging"],
            img: "/assets/images/airguard.png"
        }
    ];

    // 2. STATE: Track which product is currently in the "Spec Box"
    const [activeProduct, setActiveProduct] = useState(products[0]);

    // 3. REF: Create a reference to the spec section so we can scroll to it
    const specSectionRef = useRef(null);

    // 4. FUNCTION: Handle "View Specs" click
    const handleViewSpecs = (product) => {
        setActiveProduct(product);
        // Smooth scroll to the bottom section
        specSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // 5. FUNCTIONS: Handle Next/Prev Swipe
    const handleNext = () => {
        const currentIndex = products.findIndex(p => p.id === activeProduct.id);
        const nextIndex = (currentIndex + 1) % products.length; // Loops back to start
        setActiveProduct(products[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = products.findIndex(p => p.id === activeProduct.id);
        const prevIndex = (currentIndex - 1 + products.length) % products.length; // Loops back to end
        setActiveProduct(products[prevIndex]);
    };

    return (
        <div>
            {/* PAGE HEADER */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="section-title">SMART IOT <span className="highlight">PRODUCTS</span></h2>
                <p style={{ color: '#888' }}>Hardware and software solutions engineered for the connected future.</p>
            </div>

            {/* --- TOP GRID (All Products) --- */}
            <div className="team-grid">
                {products.map((item) => (
                    <div key={item.id} className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>

                        {/* UPDATED: Image Container */}
                        <div style={{
                            height: '180px', /* Increased height slightly for better image view */
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
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover' /* Ensures image fills box */
                                }}
                            />
                        </div>

                        <h3 style={{ fontSize: '1.2rem', color: 'white' }}>{item.title}</h3>

                        <button
                            className="view-specs-btn"
                            onClick={() => handleViewSpecs(item)}
                        >
                            View Specs
                        </button>
                    </div>
                ))}
            </div>

            {/* --- BOTTOM "GLOWING BOX" SPEC VIEWER --- */}
            <div ref={specSectionRef} className="spec-viewer-container">

                <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '80px' }}>
                    TECHNICAL <span className="highlight-purple">SPECIFICATIONS</span>
                </h3>

                <div className="carousel-wrapper">

                    {/* LEFT BUTTON */}
                    <button className="nav-btn left" onClick={handlePrev}>&#10094;</button>

                    {/* THE GLOWING CARD */}
                    <div className="glowing-spec-card" key={activeProduct.id}> {/* Key change triggers animation */}

                        {/* Left Side: Image Area */}
                        <div className="spec-image-box" style={{ padding: '0', overflow: 'hidden' }}>
                            <span className="model-badge" style={{ zIndex: 2 }}>MODEL-0{activeProduct.id}</span>

                            {/* UPDATED: Large Spec Image */}
                            <img
                                src={activeProduct.img}
                                alt={activeProduct.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.9
                                }}
                            />
                        </div>

                        {/* Right Side: Details */}
                        <div className="spec-details">
                            <h2 className="spec-title">{activeProduct.title}</h2>
                            <span className="spec-category">{activeProduct.category}</span>
                            <p className="spec-desc">{activeProduct.desc}</p>

                            <div className="feature-list">
                                {activeProduct.features.map((feat, i) => (
                                    <span key={i} className="feature-tag">{feat}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT BUTTON */}
                    <button className="nav-btn right" onClick={handleNext}>&#10095;</button>

                </div>
            </div>
        </div>
    );
};

export default Solutions;
