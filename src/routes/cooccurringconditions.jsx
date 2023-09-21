import React from "react";
import Infobox from "../components/infobox";


export default function CooccurringConditions() {

	let data = {
		header: (<h2>Co-occurring Conditions</h2>),
		text: (
			<div>
				<p>
					Dyslexia primarily affects a person's ability to read, write, and spell. Individuals with dyslexia may be more likely to have certain conditions or difficulties that can co-occur. However, the presence of comorbidities can vary from person to person. Here are some conditions that have been associated with dyslexia:
					<ol>
						<li>
							Attention-Deficit/Hyperactivity Disorder (ADHD): Dyslexia and ADHD commonly co-occur. ADHD is a neurodevelopmental disorder characterized by difficulties with attention, hyperactivity, and impulsivity.  There are differences in the prefrontal cortex of the brain typically affecting executive functioning skills. Executive dysfunction is an impairment in skills that attend to memory, focus, organization, time management, attention, and self-regulation.
						</li>
						<li>
							Dyscalculia: A specific learning disorder that affects an individual's ability to understand and work with numbers. It can co-occur with dyslexia, as both conditions involve difficulties with processing and manipulating symbols and information.
						</li>
						<li>
							Dysgraphia: A specific learning disorder that affects a person's ability to write coherently and fluently. Some individuals with dyslexia may also experience difficulties with writing, which can be related to dysgraphia.
						</li>
						<li>
							Speech and Language Disorders: Some individuals with dyslexia may have co-occurring speech and language disorders. These can include difficulties with articulation, expressive language (using words and sentences to express oneself), receptive language (understanding spoken or written language), and phonological processing (manipulating sounds in words).
						</li>
						<li>
							Developmental Coordination Disorder (DCD): DCD, also known as dyspraxia, is a condition that affects a person's motor coordination and can impact activities such as writing, tying shoelaces, or participating in sports. Some individuals with dyslexia may also have DCD, as both conditions involve difficulties with coordination.
						</li>
						<li>
							Anxiety and Depression: While not directly caused by dyslexia, individuals with dyslexia may be more susceptible to experiencing anxiety and depression due to the challenges and frustrations they may face in academic and social settings.
						</li>
						<li>
							Sensory Processing Disorder: A condition in which the brain has trouble receiving or responding to information from the senses. It may affect one or more senses by being under or over responsive.
						</li>
					</ol>
					<br />
					If you suspect that you or someone you know may have dyslexia or related comorbidities, it is recommended to consult with a healthcare professional or a specialist in learning disorders for a comprehensive assessment and appropriate support.
					<br />
					<br />
					The focus is on understanding and appreciating the unique strengths and abilities that individuals with neurodiverse conditions possess and creating inclusive environments that support their needs.

				</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}