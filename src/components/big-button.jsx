import React from "react";
import { Link } from "react-router-dom";

export default function Bigbutton(props) {
    const body = (
        <div className="big-button">
            <div>
                <img src="button-icon.png" draggable={false} />
            </div>
            <div style={{ flexGrow: 10 }}>
                {props.name}
            </div>
            <div className="button-arrow">
                <img src="arrowright.png" draggable={false} />
            </div>
        </div>
    );

    return (
        <div>
            {props.link.charAt(0) == "/" ?
                <Link to={props.link}>
                    {body}
                </Link>
                :
                <a href={props.link}>
                    {body}
                </a>
            }
        </div>
    );
}