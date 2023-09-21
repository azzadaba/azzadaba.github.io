import React from "react";
import Infobox from "../components/infobox";

export default function Services() {
	let data = {
		header: <h2>Services</h2>,
		text: (
			<div>
				<a id="tutoring" className="basic-header">
					<h3>Remedial Tutoring <i>(in-person or virtual)</i></h3>
				</a>

				<p>
					Private 1:1 remedial tutoring is available for individuals of all ages who struggle with literacy learning. Lessons are tailored to the specific learning requirements of each learner. An initial assessment will determine the areas of need and help plan the remedial intervention program. Lessons are an hour long and target all literacy skills, including phonological awareness, reading, writing, spelling, grammar and syntax. The remedial methodology used is based on a hybrid of the Orton-Gillingham and Structured Word Inquiry principles.<br></br>
					<br></br>
					Small group tutoring is also available during the summer months. This takes the form of a mini-camp and targets specific literacy skills intensively for a week. Request to be added to our contact list for more information.
				</p>

				<a id="consulting" className="basic-header">
					<h3>Consulting & Assessment</h3>
				</a>

				<p>
					Consultation services are available for individuals, schools or institutions who seek support or expertise in the area of learning difficulties and literacy acquisition. These services entail:<br></br>
					<ul>
						<li>
							Informal Academic Assessments are offered to identify gaps in literacy knowledge that may contribute to a learner's struggles with reading and writing. Based on the results of this assessment, a remedial intervention plan can be provided if needed.
						</li>
						<li>
							Observation for young learners. A brief report and recommendations can be provided upon request.
						</li>
						<li>
							Attending IEP meetings for learners in the tutoring program.
						</li>
						<li>
							Speaking and giving presentations on related topics, such as learning disabilities, literacy acquisition, English as an additional language and dyslexia.
						</li>
					</ul>
				</p>
			</div>
		)
	};

	return <Infobox data={data} />;
}
