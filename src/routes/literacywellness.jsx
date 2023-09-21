import React from "react";
import Infobox from "../components/infobox";


export default function LiteracyWellness() {

	let data = {
		header: (<h2>What is literacy wellness?</h2>),
		text: (<p>
			"Literacy wellness" is a concept that recognizes the importance of literacy skills in promoting overall well-being and quality of life. It aims to empower individuals to make informed decisions, engage in meaningful activities, access resources and information, and navigate the complexities of the modern world. By promoting literacy, individuals can potentially improve their overall wellness and achieve their full potential in different aspects of life.
			<br /><br />
			By being able to read, write, and understand information, individuals are better equipped to access knowledge and resources, make informed decisions, communicate effectively, and engage in lifelong learning. These abilities can positively impact various aspects of wellness, such as mental, emotional, and social well-being.
		</p>),
		image: "logo.png",
		hasModel: true
	}

	return (
		<Infobox data={data} />
	);
}