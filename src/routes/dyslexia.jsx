import React from "react";
import Infobox from "../components/infobox";


export default function Dyslexia() {

	let data = {
		header: (<h2>Dyslexia</h2>),
		text: (
			<div>
				<p>
					The updated 2025 definition of dyslexia, proposed by the International Dyslexia Association (IDA), supported by the latest research and comprehensive community collaboration, is as follows:
				</p>

				<p style={{ color: "gray", fontSize: 13 }}>
					“Dyslexia is a specific learning disability characterized by difficulties in word reading and/or spelling that involve accuracy, speed, or both and vary depending on the orthography. These difficulties occur along a continuum of severity and persist even with instruction that is effective for the individual’s peers. The causes of dyslexia are complex and involve combinations of genetic, neurobiological, and environmental influences that interact throughout development. Underlying difficulties with phonological and morphological processing are common but not universal, and early oral language weaknesses often foreshadow literacy challenges. Secondary consequences include reading comprehension problems and reduced reading and writing experience that can impede growth in language, knowledge, written expression, and overall academic achievement. Psychological well-being and employment opportunities also may be affected. Although identification and targeted instruction are important at any age, language and literacy support before and during the early years of education is particularly effective.”
				</p>

				<p>
					Dyslexia is one of the most common learning differences, estimated to affect 5–10% of the population. Early identification and evidence-based intervention are the keys to unlocking a learner's full potential.
				</p>

				<p>
					It is important to note that dyslexia is entirely unrelated to intelligence or effort. It is a lifelong condition that transcends age, race, and background, though its severity can be influenced by the complexity of a language's orthography (writing system).
				</p>

				<a id="neurodiverse" className="basic-header">
					<h3>A Neurodiverse Perspective</h3>
				</a>

				<p>
					Modern education increasingly views dyslexia through the lens of neurodiversity, recognizing it as a natural variation in human neurology rather than a deficit. This shift in perspective moves us away from "fixing" a student and toward building supportive environments that honor different processing styles.
				</p>

				<p>
					Dyslexic individuals often possess remarkable strengths in pattern recognition, holistic problem-solving, creativity and resilience.By embracing neurodiversity, we reduce stigmatization and focus on providing the specific interventions and accommodations that allow these valuable contributions to shine.
				</p>

				<a id="indicators" className="basic-header">
					<h3>Common Indicators of Dyslexia</h3>
				</a>

				<p>
					While dyslexia presents differently in every individual, it typically manifests as persistent challenges with:
				</p>

				<ul>
					<li>
						Phonological Processing: Difficulty recognizing and manipulating the sounds of spoken language.
					</li>
					<li>
						Morphological Awareness: Challenges in recognizing how the meaningful parts of words (bases and affixes) connect.
					</li>
					<li>
						Reading Accuracy & Fluency: Laborious decoding that can impede the flow of reading.
					</li>
					<li>
						Reading Comprehension: Difficulty often resulting from the high cognitive load of decoding.
					</li>
					<li>
						Spelling & Written Expression: Persistent difficulties with orthographic mapping and translating thoughts to paper.
					</li>
				</ul>
			</div>
		)
	}

	return (
		<Infobox data={data} />

	);
}
