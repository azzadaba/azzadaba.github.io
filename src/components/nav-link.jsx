import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navlink(props) {
  const sublinks =
    props.sub != undefined
			? props.sub.map((sublink) => (
				<Link to={sublink.link} key={sublink.text} className="nav-sublink">
					{sublink.text}
				</Link>
			))
      : null;

    
	
	const [style, setStyle] = useState("hide");
	
  function openDropdown() {
		setStyle("show");
	}
	
	function closeDropdown() {
		setStyle("hide");
  }

  return (
    <>
      {props.sub == undefined ? (
        <Link to={props.link} className="nav-parent">
          <div className="nav-link">
            <div className="nav-icon">
              <img src="button-icon.png" draggable={false} />
            </div>
            <div>{props.name}</div>
          </div>
        </Link>
      ) : (
        <div className="nav-parent" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
          <div className="nav-link">
            <div className="nav-icon">
              <img src="button-icon.png" draggable={false} />
            </div>
            <div>{props.name}</div>
          </div>
          <div className={"nav-dropdown " + style}>
            <ul>{sublinks}</ul>
          </div>
        </div>
      )}
    </>
  );
}
