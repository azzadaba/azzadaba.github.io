import React from "react";
import Navlink from "./nav-link";

export default function Navbar() {
    return (
        <header className="nav-bar">
            <Navlink name="Home" link="/" />
            <Navlink name="About" link="/about" />
            <Navlink name="Services" link="/services" />
            <Navlink name="Learning Hub" link="/dyslexia" sub={[
                { text: "What is dyslexia?", link: "/dyslexia" },
                { text: "Co-occurring Conditions", link: "/cooccurringconditions" },
                { text: "Phonological Awareness", link: "/phonological" },
                { text: "Morphological Processing", link: "/morphological" },
                { text: "Orthography", link: "/orthography" },
                { text: "Etymology", link: "/etymology" },
                { text: "Remedial Interventions", link: "/interventions" },
                { text: "Assistive Technology", link: "/assistivetech" }
            ]} />
            <Navlink name="Store" link="/resources" />
        </header>
    );
}