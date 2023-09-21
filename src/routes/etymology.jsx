import React from "react";
import Infobox from "../components/infobox";


export default function Etymology() {

  let data = {
    header: (<h2>Etymology</h2>),
    text: (
      <div>
        <p>
          Etymology is the study of the origin and history of words, including their meanings and how they have evolved over time. It involves tracing the linguistic roots and connections of words and examining the changes they have undergone throughout various languages and cultures.
          <br /><br />
          The word "etymology" itself comes from the Greek words "etymon," meaning "true sense," and "logia," meaning "study" or "science." Therefore, etymology can be understood as the science or study of the true sense or true meaning of words. It involves analyzing base elements, prefixes, suffixes, and other linguistic components that contribute to a word's meaning.
          <br /><br />
          It helps students understand the connections between words that share a base element and sheds light on how words have been shaped by human communication over centuries.</p>
      </div>
    )
  }

  return (
    <Infobox data={data} />
  );
}