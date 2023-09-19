import React from "react";
import { Link } from "react-router-dom";
import Bigbutton from "../components/big-button";

export default function Navpage() {
    return (
        <div className="navpage">
            <div className="logo-side">
                <img src="logo.png" alt="literacy wellness" />
                <h1>Empowering Learners for Life</h1>
            </div>
            <div className="navs">
                <Bigbutton name="About LW" link="/about" />
            </div>
        </div>
    );
}