import React from "react";
import Infobox from "../components/infobox";


export default function Interventions() {

	let data = {
		header: (<h2>Remedial Structured Literacy Interventions</h2>),
		text: (
			<div>
				<a id="core" className="basic-header">
					<h3>Core Elements of Effective Structured Literacy Intervention</h3>
				</a>

				<p>
					While strategies are tailored to the individual, high-impact Structured Literacy remediation typically includes:
				</p>
				<ul>
					<li>
						Multisensory, Systemic and Explicit Instruction: Step by step, direct instruction that engages visual, auditory, and kinesthetic-tactile pathways simultaneously to reinforce neural connections and improve memory retention.
					</li>
					<li>
						Phonological Awareness Training: Targeting the ability to process and manipulate sounds in spoken language—the foundation of successful phonics and decoding.
					</li>
					<li>
						Morphological Awareness Training: Teaching students to recognize and manipulate morphemes (the smallest units of meaning, such as prefixes, suffixes, and bases). This strengthens vocabulary, spelling, and reading comprehension by helping students "decode for meaning."
					</li>
					<li>
						Etymological Awareness: Exploring word history to explain why words are spelled the way they are. Understanding a word's origin often provides the "missing link" for seemingly irregular spellings.
					</li>
					<li>
						Syntax & Grammar: Building a mastery of sentence structure that builds upon morphological awareness. Students learn how word structure influences grammatical function, enabling them to transition from reading individual words to constructing cohesive, fluent writing.
					</li>
					<li>
						Individualized Programming: Utilizing continuous assessment and progress monitoring to ensure instruction aligns with the learner’s specific strengths and evolving needs.
					</li>
				</ul>

				<hr />
				<a id="hybrid" className="basic-header">
					<h2>The Literacy Wellness Framework: A Hybrid Approach</h2>
				</a>

				<p>
					To provide the most robust support possible, the Literacy Wellness methodology integrates two of the most respected frameworks in the field of literacy science:
				</p>

				<a id="orton" className="basic-header">
					<h3>1. The Orton-Gillingham (OG) Approach</h3>
				</a>

				<p>
					Widely considered the "gold standard" for dyslexia remediation, the Orton-Gillingham approach is a systematic, cumulative, sequential and highly structured framework. It is designed to develop reading and writing skills by tailoring instruction to the specific needs of the learner. 
				</p>
				<ul>
					<li>
						Diagnostic & Prescriptive: Instruction is never "one-size-fits-all." Each lesson is based on the student's performance in the previous session, allowing for a precise focus on the specific linguistic gaps identified through ongoing assessment.
					</li>
					<li>
						Simultaneous Multisensory Engagement: OG famously utilizes the "VAKT" (Visual, Auditory, Kinesthetic-Tactile) approach. By engaging all these pathways at once, we create stronger neural anchors for reading and spelling.
					</li>
					<li>
						Explicit & Systematic: There is no guesswork. Every rule of the English language—from simple phonemes to complex orthographic patterns—is taught directly and in a logical order that builds from the simplest to the most complex concepts.
					</li>
					<li>
						Cognitive & Empowering: Beyond the mechanics of reading. OG develops metacognition and the self-awareness necessary for students with dyslexia to become independent, confident readers.
					</li>
				</ul>

				<p>
					Originally developed in the early 20th century by neuropsychiatrist Samuel Orton and educator Anna Gillingham, its principles remain the foundation for the world’s most successful evidence-based literacy interventions.
				</p>

				<a id="structure" className="basic-header">
					<h3>2. Structured Word Inquiry (SWI)</h3>
				</a>

				<p>
					Structured Word Inquiry (SWI) is a scientific framework used to analyze the spelling and meaning of words. Rather than relying on rote memorization of spellings, SWI teaches students to become "word scientists" who investigate the logic behind English spelling. By utilizing morphemes (meaningful word parts), etymology(history), and phonology (sounds), students learn to navigate the language with logic and confidence. Initially developed by Peter Bowers, PhD, SWI has gained popularity in recent years and is now widely used by remedial educators and reading specialists.
				</p>

				<p>
					The Four Questions of Inquiry Students use a consistent four-step investigation for any word:
				</p>
				<ol>
					<li>
						What is the meaning? Defining the core concept of the word.
					</li>
					<li>
						How is it constructed? Using "word sums" to identify the base and its affixes (e.g., sign + al = signal).
					</li>
					<li>
						What are its relatives? Identifying other words that share the same base (e.g., design, signature, designate).
					</li>
					<li>
						What is the phonological pattern? Determining how the graphemes represent sounds within the context of that specific word's structure.
					</li>
				</ol>
			</div>
		),
		buttons: [
			{
				text: "Orton-Gillingham",
				link: "#orton"
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