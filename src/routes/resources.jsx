import React from "react";
import Infobox from "../components/infobox";

export default function Resources() {
  let data = {
    header: <h2>Store</h2>,
    text: (
      <div>
        <center>
          <div class="payhip-embed-page" data-key="4x5dD">...</div><script type="text/javascript" src="https://payhip.com/embed-page.js?v=24u68985"></script>
        </center>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
