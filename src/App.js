import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Spaceship from "./components/Spaceship";
import Stories from "./components/Stories";
import Mission from "./components/Mission";
import RocketAnimation from "./RocketAnimation";

function App() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  // Determine the active link based on the current location
  const getClassName = (path) => {
    return location.pathname === path ? "rotating-border" : "";
  };

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuActive((prev) => !prev);
  };

  // Close menu and navigate
  const handleLinkClick = () => {
    setMenuActive(false); // Close the menu
  };

  return (
    <>
      <header className="header">
        <nav className={`navbar ${menuActive ? "active-background" : ""}`}>
          <div
            className={`menu-toggle ${menuActive ? "active" : ""}`}
            onClick={handleMenuToggle}
          >
            <div className="menu-icon"></div>
          </div>
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <div className={getClassName("/")}>
                <Link id="home-link" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className={getClassName("/Aboutus")}>
                <Link id="about-link" to="/Aboutus" onClick={handleLinkClick}>
                  About
                </Link>
              </div>
            </li>
            <li>
              <div className={getClassName("/Spaceship")}>
                <Link id="space-link" to="/Spaceship" onClick={handleLinkClick}>
                  Space
                </Link>
              </div>
            </li>
            <li>
              <div className={getClassName("/Stories")}>
                <Link id="stories-link" to="/Stories" onClick={handleLinkClick}>
                  Stories
                </Link>
              </div>
            </li>
            <li>
              <div className={getClassName("/Mission")}>
                <Link id="mission-link" to="/Mission" onClick={handleLinkClick}>
                  Mission
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Spaceship" element={<Spaceship />} />
        <Route path="/Stories" element={<Stories />} />
        <Route path="/Mission" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
