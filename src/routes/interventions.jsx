import React from "react";
import Infobox from "../components/infobox";


export default function Interventions() {

	let data = {
		header: (<h2>Remedial Interventions</h2>),
		text: (
			<div>
				<p>
					Dyslexia is a lifelong condition, and while intervention can significantly improve reading and writing skills, ongoing support and accommodations may still be necessary. Effective remedial intervention requires a well-trained and knowledgeable instructor who can implement evidence-based practices and adapt the approach to meet individual needs.
					<br /><br />
					While individualized strategies may vary depending on the needs of each person, here are some common elements of effective remedial interventions for dyslexia:
					<ol>
						<li>
							Multisensory Instruction: Dyslexia remediation often incorporates multiple senses, such as visual, auditory, and kinesthetic/tactile, to engage different pathways in the brain. This approach helps reinforce learning and memory.
						</li>
						<li>
							Individualized Instruction: Dyslexia interventions should be tailored to the specific needs and strengths of each individual. Assessments and ongoing monitoring of progress can help identify areas that require additional support and guide the development of personalized strategies.
						</li>
						<li>
							Phonological Awareness Training: Dyslexia is often characterized by difficulties in processing and manipulating sounds in spoken language. Phonological awareness exercises, such as rhyming, blending, segmenting, and manipulating sounds, are commonly included to improve phonemic awareness and phonics skills.
						</li>
						<li>
							Structured Literacy Approach: Structured literacy programs provide a systematic and explicit approach to teaching reading and spelling. It encompasses direct instruction in phonology, morphology, orthography, etymology, grammar, and syntax.
						</li>
					</ol>
				</p>

				<br></br>
				<a id="orton-gillingham" className="basic-header">
					<h3>The Orton-Gillingham Approach</h3>
				</a>
				<p>
					The <a href="https://www.ortonacademy.org/resources/what-is-the-orton-gillingham-approach/" target="_blank">Orton-Gillingham</a> approach (OG) is a systematic, explicit, cumulative and sequential approach that uses multiple sensory pathways for teaching reading and writing skills in a way that is tailored to the individual needs of each learner. It is widely considered the gold standard in remediation because of its effectiveness in improving reading and writing skills for individuals with dyslexia or other reading and writing difficulties, such as language disorders or English language learners.  It is based on a strong understanding of the underlying cognitive and neural processes that contribute to dyslexia. It was developed in the early 20th century by neuropsychiatrist Samuel Orton and educator Anna Gillingham and today, many dyslexia remediation programs are based on the Orton-Gillingham approach or incorporate its principles into their instruction.
				</p>

				<br></br>
				<a id="structure" className="basic-header">
					<h3>Structured Word Inquiry</h3>
				</a>
				<p>
					The Structured Word Inquiry (SWI) method, developed by <a href="https://www.wordworkskingston.com/WordWorks/Home.html" target="_blank">Peter Bowers</a>, PhD, has gained popularity in recent years and is now widely used by educators and reading specialists. <br></br>
					It is a structured and explicit approach to teaching students how to analyze and understand the spelling and meaning of words based on their structure, etymology, and phonology. The SWI method draws on scientific principles to break down words into their meaningful units, including morphemes (the smallest units of meaning in a word), phonemes (the smallest units of sound in a word), and graphemes (the letters or letter combinations that represent phonemes)..
					Students learn to ask questions such as:
					<ul>
						<li>
							What is the meaning of the word?
						</li>
						<li>
							What affixes (prefixes or suffixes) are added to the base element, and what do they mean?
						</li>
						<li>
							What are the relatives that share the same base element?
						</li>
						<li>
							What is the phonological pattern of the word (e.g., what sounds do the graphemes represent, and how are they blended together)?
						</li>
					</ul>
				</p>
			</div>

		),
		buttons: [
			{
				text: "Orton-Gillingham",
				link: "#orton-gillingham"
			},
			{
				text: "Structured Word Inquiry",
				link: "#structure"
			}
		]
	}

	return (
		<Infobox data={data} />
	);
}