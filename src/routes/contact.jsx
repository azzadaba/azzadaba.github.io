import React from "react";
import Infobox from "../components/infobox";

export default function Contact() {
  let data = {
    header: <h2>Contact</h2>,
    text: (
      <div>
            <form action="mailto:info@literacywellness.com" method="get" encType="text/plain">
                <input type="text" name="subject" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <textarea name="body" cols="30" rows="10" placeholder="Message..."></textarea>
                <input type="submit" value="Send"/>
        </form>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
