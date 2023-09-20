import React from "react";
import Infobox from "../components/infobox";

export default function Resources() {
  let data = {
    header: <h2>Resources</h2>,
    text: (
      <div>
        <center>
          <h1>Coming Soon!</h1>
        </center>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
