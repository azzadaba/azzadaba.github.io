import React from "react";
import Infobox from "../components/infobox";

export default function Resources() {
  let data = {
    header: <h2>Store</h2>,
    text: (
      <div>
        <center>
        </center>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
