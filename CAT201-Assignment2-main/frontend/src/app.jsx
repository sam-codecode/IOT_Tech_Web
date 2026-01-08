import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/Services"; 
import Solutions from "./pages/solutions"; 
import Team from "./pages/team";
import "./styles/main.css";

function App() {
    return (
        <div className="app-container">
            {/* NAVIGATION */}
            <nav className="navbar">
                <div className="company-brand">
                    <span className="brand-text">CodeFusion</span>
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
            </nav>

            {/* MAIN CONTENT SECTIONS */}
            <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="solutions"><Solutions /></section>
                <section id="team"><Team /></section>
            </main>

            <footer className="footer">
                <p>&copy; 2025 CodeFusion | Powered by CS @ USM</p>
            </footer>
        </div>
    );
}

export default App;
