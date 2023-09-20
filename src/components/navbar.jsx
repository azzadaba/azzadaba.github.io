import React from "react";
import Navlink from "./nav-link";

export default function Navbar() {
    return (
        <header className="nav-bar">
            <Navlink name="Home" link="/" />
            <Navlink name="About" link="/about" />
            <Navlink name="Dyslexia" link="/dyslexia" sub={[
                { text: "What is dyslexia?", link: "dyslexia" },
                { text: "Coocurring Conditions", link: "conditions" },
                { text: "What is Phonological Processing?", link: "phonological" },
                { text: "What is Morphological Processing?", link: "morphological" },
                { text: "Orthography", link: "orthography" },
                { text: "Etymology", link: "etymology" },
                { text: "Remedial Interventions", link: "remedial" },
                { text: "Assistive Technology", link: "assistive" }
            ]} />
            <Navlink name="LW Resources" link="/resources" />
            <Navlink name="Services" link="/services" sub={[
                { text: "Remedial Tutoring", link: "tutoring" },
                { text: "Consulting & Assessment", link: "consulting" }
            ]} />
            <Navlink name="Contact" link="/contact" />
        </header>
    );
}