import React from "react";
import { Link } from "react-router-dom";

export default function Bigbutton(props) {
    return (
        <Link to={props.link}>
            <div className="big-button">
                <div>
                    <img src="button-icon.png" draggable={false} />
                </div>
                <div style={{flexGrow: 10}}>
                    {props.name}
                </div>
                <div className="button-arrow">
                    <img src="arrowright.png" draggable={false} />
                </div>
            </div>
        </Link>
    );
}