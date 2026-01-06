import React from "react";
import Infobox from "../components/infobox";


export default function Morphological() {

	let data = {
		header: (<h2>Morphological Awareness: Bridge to Fluency</h2>),
		text: (
			<div>
				<p>
					Morphology awareness moves the learner from simple, sound-by-sound decoding to the orthographic mapping phase of reading and spelling. By teaching students to recognize morphemes—the smallest units of meaning in a language, such as bases, prefixes, and suffixes, we help them move toward automaticity.
				</p>

				<p>
					Example: Instead of decoding r-e-p-l-a-y-i-n-g as isolated sounds, the brain sees [re-] [play] [-ing].
				</p>

				<p>
					When a student possesses strong morphological awareness, they transition from "sounding out" letters to "analyzing structures." This understanding is essential for navigating advanced texts where vocabulary becomes increasingly complex.
				</p>

				<a id="game-changer" className="basic-header">
					<h3>Why Morphology is a "Game-Changer" for Dyslexic Learners</h3>
				</a>

				<p>
					For students who struggle with decoding long, multi-syllabic words, morphological awareness provides a more efficient cognitive path:
				</p>
				<ul>
					<li>
						Strategic Decoding: Rather than viewing a word as a long string of individual letters, students learn to break it down into manageable, meaningful parts (e.g., un-help-ful).
					</li>
					<li>
						Vocabulary Expansion: A single base element can unlock dozens of related words. By mastering one morpheme, a student's vocabulary grows exponentially rather than incrementally.
					</li>
					<li>
						Enhanced Comprehension: Understanding how a word's meaning and grammatical function changes when a morpheme is added or removed allows students to derive the definition of unfamiliar words.
					</li>
					<li>
						Spelling Logic: It explains why the word "health" has an a (it comes from heal) or why "sign" has a g (it is related to signal).
					</li>
				</ul>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}