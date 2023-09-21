import React from "react";
import Infobox from "../components/infobox";


export default function About() {

	let data = {
		header: (<span>
			<h2 style={{ display: "inline" }}>AZZA DABA, </h2>
			<h4 style={{ display: "inline" }}>MA SpEd, AOGPE, OCELT</h4>
		</span>),
		image: "azza.png",
		subheader: (<div><h4>Educational Consultant</h4> <h4>Structured Literacy Interventionist</h4></div>),
		text: (<p>
			Azza has a wealth of experience and expertise in the field of education, particularly in the area of literacy acquisition and remedial pedagogy. Azza's professional journey began over two decades ago in a special education setting, where she gained experience teaching children with neurodiverse conditions and learning differences. She became fascinated by language and literacy acquisition, particularly remedial intervention. In 2011, she completed her Masters in Special and Inclusive Education. Her pursuit of expertise in dyslexia therapy led her to become an Orton-Gillingham practitioner. 
			<br /><br />
			Being bilingual has provided her with the opportunity to study the differences between two writing systems, enabling her to gain valuable insights into the cognitive and linguistic demands involved in language acquisition and writing. Additionally, she holds certification as an Ontario-certified English language teacher (OCELT) and enjoyed teaching English as a second language.
			<br /><br />
			Her literacy intervention methodology is based on a hybrid of the Orton-Gillingham and Structured Word Inquiry principles. Azza believes that a structured, multisensory, prescriptive, and individualized approach to teaching is the most effective for students, and that scientific and factual information is crucial for successful learning. Her goal is to empower her students with knowledge and a true understanding of the structure of English orthography.
			<br /><br />
			Azza is a dedicated practitioner and a lifelong learner who is committed to ongoing professional development. This is particularly relevant in the field of education, where research and best practices are constantly evolving. She aims to share her expertise through this website with learners and their families as well as other professionals in the field.
		</p>)
	}

	return (
		<Infobox data={data} />
	);
}