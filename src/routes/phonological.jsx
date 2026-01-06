import React from "react";
import Infobox from "../components/infobox";


export default function Phonological() {

	let data = {
		header: (<h2>Phonological Awareness: The Foundation of Literacy</h2>),
		text: (
			<div>
				<p>
					Phonological awareness is the foundational ability to recognize and manipulate the sounds of spoken language. It involves a deep understanding of phonemes—the individual units of sound that constitute words—and the cognitive agility to blend, segment, and manipulate these sounds to decode and encode language.
				</p>
				<p>
					As a fundamental building block for reading success, phonological awareness allows a learner to master the sound structure of language, leading to the successful development of letter-sound correspondences.Research has shown that children who have strong phonological awareness skills are more likely to become successful readers.
				</p>
				<p>
					Related terminology:
				</p>
				<ul>
					<li>
						Decode: Break unfamiliar words into their component sounds for reading.
					</li>
					<li>
						Encode: Translate spoken sounds into written symbols for spelling.
					</li>
					<li>
						Map: Connect the sounds to the corresponding symbol(s).
					</li>
					<li>
						Blend: Continuous blending involves "stretching" sounds together without a break (e.g., sssssaaaaammmm), which reduces the "memory drop" that often happens between isolated sounds.
					</li>
				</ul>

				<a id="role" className="basic-header">
					<h3>The Role of Phonological Processing in Dyslexia</h3>
				</a>

				<p>
					Dyslexia is most frequently characterized by a deficit in phonological processing. Deficits can range from mild to profound difficulties in blending, segmenting or sound manipulation. Many learners experience phonological challenges alongside other difficulties, requiring a comprehensive approach.
				</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}