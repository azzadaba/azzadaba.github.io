import React from "react";
import Infobox from "../components/infobox";


export default function Dyslexia() {

	let data = {
		header: (<h2>Dyslexia</h2>),
		text: (
			<div>
				<p>
					Dyslexia is a language-based neurodevelopmental condition that affects a person's ability to learn literacy skills. It is estimated that 5-10% of the population has dyslexia, making it one of the most common learning differences. Children with a family history of dyslexia are at a higher risk for developing the condition. Early identification and appropriate intervention can help individuals with dyslexia cope with their difficulties and reach their full potential.
					Dyslexia is not related to intelligence and is not a result of a lack of effort. It is a lifelong condition that affects people of all ages, races, and backgrounds. Dyslexia can vary in severity and can be greatly impacted by the orthography of the language.

					<br /><br />
					Today, dyslexia is increasingly viewed as a neurodiverse condition rather than a disability. Accordingly, dyslexia is considered a natural variation of human neurology, representing a different way of processing information and acquiring literacy skills. Dyslexic individuals often exhibit strengths in areas such as creativity,
					problem-solving, pattern recognition, and holistic thinking. By recognizing dyslexia as a neurodiverse condition, the emphasis shifts from trying to fix or overcome dyslexia to creating supportive environments that accommodate different learning styles and provide appropriate interventions and accommodations. It promotes the understanding that dyslexic individuals have valuable contributions to make and should be accepted and supported without stigmatization or marginalization.
					<br /><br />
					The symptoms of dyslexia can vary from person to person, but common signs include difficulty with:
				</p>
				<ul>
					<li>Phonological awareness and processing</li>
					<li>Morphological awareness and processing</li>
					<li>Spoken language</li>
					<li>Reading accuracy and fluency</li>
					<li>Spelling</li>
					<li>Written Expression</li>
					<li>Reading comprehension</li>
				</ul>
			</div>
		)
	}

	return (
		<Infobox data={data} />

	);
}