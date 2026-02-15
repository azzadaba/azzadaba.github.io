import React from "react";
import Infobox from "../components/infobox";


export default function Orthography() {

	let data = {
		header: (<h2>Orthography: The Rules of Written Language</h2>),
		text: (
			<div>
				<p>
					Orthography is the system of conventions used to represent a spoken language in written form. It is a sophisticated framework that encompasses spelling, punctuation, capitalization, and the structural rules of grammar and syntax. Orthography serves as the visual map of our language, enabling clear communication and deep reading comprehension.
				</p>
				
				<a id="depth" className="basic-header">
					<h3>Understanding Orthographic Depth</h3>
				</a>

				<p>
					In the field of linguistics, writing systems are categorized by their orthographic depth:
				</p>

				<ul>
					<li>
						Shallow Orthographies: Languages like Spanish or Italian have a near one-to-one relationship between letters and sounds, making them relatively simple to decode.
					</li>
					<li>
						Deep Orthographies: English is a "deep" orthography. It has complex letter-sound correspondences such as ‘one sound - multiple spellings’ or ‘one spelling - multiple sounds’.
					</li>
				</ul>

				<a id="challenge" className="basic-header">
					<h3>The Challenge for the Dyslexic Learner</h3>
				</a>
				<p>
					Because English is a deep orthography, it poses significant challenges for individuals with dyslexia. The struggles with reading, writing, and spelling are often more pronounced because the "code" is not always transparent. The spelling is not just trying to represent sounds—it is also trying to preserve meaning and history.
				</p>
				<p>
					To a student with dyslexia who relies on a simple "one letter = one sound" rule, these complexities feel like rule-breakers and can be very frustrating. Traditional spelling instruction focuses on “sounding out” words or rote memory. The Literacy Wellness approach dives deep into orthography to explain the logic that governs the English writing system.
				</p>
				<center>
					<img src="orthoinfographic.jpg" alt="infographic" style={{width: "75%"}} />
				</center>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}
