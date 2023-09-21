import React from "react";
import Infobox from "../components/infobox";


export default function Orthography() {

	let data = {
		header: (<h2>Orthography</h2>),
		text: (<p>
			Language orthography refers to the set of conventions and rules used for representing the written form of a language. It encompasses the spelling, punctuation, capitalization, and syntax. Orthography plays a crucial role in literacy and communication, as it provides a visual representation of language that allows individuals to read, write, and understand written texts. The level of orthographic depth or shallowness in an alphabetic writing system indicates how closely a written language aligns with a simple one-to-one relationship between letters and sounds. <br></br>
			<br></br>
			Therefore, languages with deep orthographies, pose greater challenges for individuals with dyslexia. Because of the complexities of the phonological and morphological structures in these languages, a dyslexic's struggles with reading, writing and spelling will be more pronounced.
		</p>)
	}

	return (
		<Infobox data={data} />
	);
}