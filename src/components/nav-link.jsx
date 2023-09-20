import React from "react";
import { Link } from "react-router-dom";

export default function Navlink(props) {
    return (
        <Link to={props.link}>
            <div className="nav-link">
                <div className="nav-icon">
                    <img src="button-icon.png" draggable={false} />
                </div>
                <div>
                    {props.name}
                </div>
            </div>
        </Link>
    );
}