import React from "react";
import Infobox from "../components/infobox";


export default function Etymology() {

  let data = {
    header: (<h2>Etymology: The Science of Meaning and History</h2>),
    text: (
      <div>
        <p>
          Etymology is the study of the origins and historical evolution of words. It involves tracing linguistic roots and examining how meanings, spellings, and structures have shifted across different languages and cultures over centuries.
        </p>
        <p>
          Derived from the Greek etymon ("true sense") and logia ("study of"), etymology is literally the science of a word's true meaning. In a structured literacy context, it is the vital third dimension of word study that explains why English looks the way it does.
        </p>

        <a id="essential" className="basic-header">
					<h3>Why Etymology is Essential for Literacy</h3>
				</a>
        <p>
          For many learners, particularly those with dyslexia, English spelling can feel like a collection of "random rules" and "exceptions." Etymology proves that English is actually a logical, highly consistent system.
        </p>

        <ul>
          <li>
            Revealing Hidden Connections: Etymology allows students to see how seemingly unrelated words share a common ancestor. For example, understanding that rupt comes from the Latin for "break" instantly connects bankrupt, interrupt, erupt, and disrupt.
          </li>
          <li>
            Explaining "Irregular" Spellings: Many "silent" letters or unusual patterns are actually historical markers. Etymology explains that the w in two is there because it is a relative of twin and twice, and the ch in character is there to signal its Greek origin.
          </li>
          <li>
            Deepening Vocabulary: By tracing a word's history, students don’t just memorize a definition; they understand the "true sense" of the word, which leads to superior long-term retention and sophisticated usage in writing.
          </li>
        </ul>

        <img src="etyminfographic.jpg" alt="infographic" style={{width: "100%"}} />
      </div>
    )
  }

  return (
    <Infobox data={data} />
  );
}
