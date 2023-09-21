import React from "react";
import Infobox from "../components/infobox";


export default function Phonological() {

	let data = {
		header: (<h2>Phonological Processing</h2>),
		text: (
			<div>
				<p>
					Phonological awareness is the ability to recognize and manipulate the sounds in spoken language. It involves understanding the individual sounds (phonemes) that make up words and how those sounds can be combined and manipulated to create new words. Phonological awareness is a fundamental building block for reading success because it helps children learn to decode words by breaking them down into their component sounds. Research has shown that children who have strong phonological awareness skills are more likely to become successful readers.
					<br />
					<br />
					Dyslexia is often associated with difficulties in phonological processing. It's important to note, however, that not all dyslexic children have the same pattern of phonological processing deficits. Some may have more severe deficits than others, and some may have other cognitive or language-related difficulties in addition to their phonological processing deficits. Effective interventions for dyslexia often involve targeted training to improve phonological awareness and other language-related skills.


				</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}