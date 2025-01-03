import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      const menu = document.querySelector(".s-header__nav");
      const toggleButton = document.querySelector(".menu-toggle");
      if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenuOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeMenuOnClickOutside);
    };
  }, []);

  return (
    <header className="s-header layout">
      <div className="row s-header__nav-wrap">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`s-header__nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li id="home">
              <NavLink activeClassName="current" to="/" exact onClick={() => setMenuOpen(false)}>
                Inicio
              </NavLink>
            </li>
            <li id="portfolio">
              <NavLink activeClassName="current" to="/portfolio" onClick={() => setMenuOpen(false)}>
                Proyectos
              </NavLink>
            </li>
            <li id="experience">
              <NavLink activeClassName="current" to="/experience" onClick={() => setMenuOpen(false)}>
                Experiencia / Educación
              </NavLink>
            </li>
            <li id="about">
              <NavLink activeClassName="current" to="/about" onClick={() => setMenuOpen(false)}>
                Acerca de mí
              </NavLink>
            </li>
            <li id="contact">
              <NavLink activeClassName="current" to="/contact" onClick={() => setMenuOpen(false)}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
