import React from "react";
import Infobox from "../components/infobox";


export default function CooccurringConditions() {

	let data = {
		header: (<h2>Co-occurring Conditions & Comorbidities</h2>),
		text: (
			<div>
				<p>
					Dyslexia primarily affects reading and writing skills, but it may present alongside other neurodivergent conditions. Understanding these comorbidities is essential for developing a truly holistic intervention plan. Because these conditions often share underlying neurological pathways, a "whole-child" approach is the most effective way to provide support.
				</p>

				<a id="function" className="basic-header">
					<h3>Executive Function & Attention</h3>
				</a>
				<ul>
					<li>ADHD (Attention-Deficit/Hyperactivity Disorder): Dyslexia and ADHD co-occur at a high rate. ADHD involves differences in the prefrontal cortex that impact executive functioning:the brain's "command center." This can manifest as challenges with working memory, focus, organization, time management, and emotional self-regulation.</li>
				</ul>

				<a id="learning" className="basic-header">
					<h3>Related Learning Differences</h3>
				</a>

				<ul>
					<li>
						Dysgraphia: A specific learning disability affecting writing fluency and coherence. While many dyslexic students struggle with spelling, dysgraphia specifically impacts the physical act of writing (graphomotor) and the mental organization of written thought.
					</li>
					<li>
						Dyscalculia: A learning difference involving the understanding of numbers and mathematical symbols. Both dyslexia and dyscalculia involve challenges with symbol processing and the retrieval of information from long-term memory.
					</li>
				</ul>

				<a id="speech" className="basic-header">
					<h3>Speech, Language & Motor Coordination</h3>
				</a>

				<ul>
					<li>
						Speech and Language Disorders: This may include difficulties with articulation, receptive language (understanding), or expressive language (speaking). Since dyslexia is rooted in language processing, these challenges often overlap.
					</li>
					<li>
						Developmental Coordination Disorder (DCD/Dyspraxia): DCD affects motor planning and coordination. It can impact "fine motor" tasks like handwriting and "gross motor" activities like balance. The overlap with dyslexia often appears in the shared difficulty of automating complex, multi-step tasks.
					</li>
				</ul>

				<a id="sensory" className="basic-header">
					<h3>Sensory & Emotional Well-being</h3>
				</a>

				<ul>
					<li>
						Sensory Processing Disorder (SPD): This occurs when the brain has difficulty receiving or responding to sensory information. A student may be over-responsive (hypersensitive) or under-responsive (hyposensitive) to light, sound, or touch, which can significantly impact their ability to focus during academic instruction.
					</li>
					<li>
						Anxiety and Depression: While not inherent to dyslexia, these are often "secondary" symptoms resulting from years of academic frustration and social pressure. Supporting the emotional health of the learner is just as vital as the remedial instruction itself.
					</li>
				</ul>

				<hr />
				<a id="next" className="basic-header">
					<h3>Next Steps</h3>
				</a>

				<p>
					If you suspect a profile that includes dyslexia or any of these co-occurring conditions, a comprehensive professional assessment is the recommended first step. Identifying the full scope of a learner's neurodivergent profile allows for the implementation of precise accommodations and targeted support.
				</p>

				<p>
					<b>
						Our focus remains on appreciating the unique strengths of the neurodiverse mind while creating an inclusive environment where every learner can thrive.
					</b>
				</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}
