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
				<h3>Expertise Rooted in Evidence</h3>
				<p>Azza is an education specialist with 20+ years of experience helping students navigate neurodiverse learning paths. Holding a Master’s in Special and Inclusive Education and a certification in the Orton-Gillingham (OG) approach, she bridges the gap between complex linguistic theory and practical, evidence-based remedial intervention.</p>

				<h3>A Global Perspective</h3>
				<p>As a bilingual educator and Ontario-certified English language teacher (OCELT), Azza brings a unique cross-linguistic perspective to her work. By having studied and compared the cognitive demands of different writing systems, she offers deep insights into literacy acquisition and how learners can master English orthography.</p>

				<h3>A Hybrid Approach to Success</h3>
				<p>By leveraging Structured Literacy and the latest Science of Reading research, Azza’s integrated methodology combines the foundational framework of Orton-Gillingham with the analytical depth of Structured Word Inquiry.</p>
				
				<h3>Translating Practice into Digital Resources</h3>
				<p>The specialized digital tools and resources curated by Literacy Wellness are a direct extension of Azza’s extensive direct intervention with students. These tools are designed to replicate the "lightbulb moments" found in her private sessions, guiding learners through the “whys” and “hows” of English with the same clarity and structured guidance she provides in person.</p>
					
				<h3>A Dedicated Practitioner and Lifelong Learner</h3>
				<p>Azza is dedicated to continuous professional development, ensuring her practice remains at the intersection of evolving research and proven results. In a field where evidence-based practices are constantly advancing, she translates complex insights from the Science of Reading into accessible, high-impact resources. Through this platform, Azza provides families and educators with the professional tools and specialized guidance necessary to foster lasting literacy wellness for every learner.</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}
