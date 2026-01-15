import React from "react";
import Infobox from "../components/infobox";


export default function About() {

	let data = {
		header: (<span>
			<h2 style={{ display: "inline" }}>AZZA DABA, </h2>
			<h4 style={{ display: "inline" }}>M.SpEd, OCELT, Orton-Gillingham Practitioner</h4>
		</span>),
		image: "azza.png",
		subheader: (<div><h4>Educational Consultant & Remedial Literacy Specialist</h4></div>),
		text: (
			<div>
				<h4>Expertise Rooted in Science</h4>
				<p>Azza is an education specialist with 20+ years of experience helping students navigate neurodiverse learning paths. Holding a Master’s in Special and Inclusive Education and a certification in the Orton-Gillingham (OG) approach, she bridges the gap between complex linguistic theory and practical, evidence-based remedial intervention.</p>

				<h4>A Global Perspective</h4>
				<p>As a bilingual educator and Ontario-certified English language teacher (OCELT), Azza brings a unique cross-linguistic perspective to her work. By studying the cognitive demands of different writing systems, she offers deep insights into how students can master English orthography.</p>

				<h4>A Hybrid Approach to Success</h4>
				<p>By leveraging Structured Literacy and the latest Science of Reading research, Azza’s integrated methodology combines the multisensory framework of Orton-Gillingham with the analytical depth of Structured Word Inquiry.</p>
				<h4>A Dedicated Practitioner and Lifelong Learner</h4>
				<p>Azza is committed to ongoing professional development. This is particularly relevant in the field of education, where research and best practices are constantly evolving. Through this platform, she provides empowering tools and information to families and educators alike.</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}