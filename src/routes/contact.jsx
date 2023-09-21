import React from "react";
import Infobox from "../components/infobox";

export default function Contact() {
  let data = {
    header: <h2>Contact</h2>,
    text: (
      <div>
        <center>
          <p>info@literacywellness.com</p>
          <p>(416)884-1970</p>

        </center>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
