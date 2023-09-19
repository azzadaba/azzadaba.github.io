import React from "react";
import Navlink from "./nav-link";

export default function Navbar() {
    return (
        <header className="nav-bar">
            <Navlink name="Home" link="/" />
            <Navlink name="About" link="/about" />
            <Navlink name="Dyslexia" link="/dyslexia" />
            <Navlink name="LW Shop" link="/shop" />
            <Navlink name="Contact" link="/contact" />
        </header>
    );
}