import React from "react";
import Infobox from "../components/infobox";
import { Link } from "react-router-dom";

export default function Services() {
	let data = {
		header: <h2>Services</h2>,
		text: (
			<div>
				<a id="tutoring" className="basic-header">
					<h3>Structured Literacy Intervention</h3>
				</a>

				<p>
					Private, 1:1 remedial support is provided for learners of all ages. These sessions are designed to address the root causes of literacy challenges through a tailored, evidence-based framework. Sessions are offered in-person during and after school hours; on-line sessions may be available in specific circumstances.

					<ul>
						<li>
							Customized Learning: Every program begins with an initial assessment to identify specific knowledge gaps and establish a personalized intervention plan.
						</li>
						<li>
							Comprehensive Skill Development: One-hour sessions target all aspects of literacy, including phonological awareness, reading, spelling, grammar, and syntax.
						</li>
						<li>
							Evidence-Based Methodology: Instruction is delivered using a specialized hybrid of Orton-Gillingham and Structured Word Inquiry principles.
						</li>
						<li>
							Summer Intensives: Small-group "mini-camps" are offered during the summer months, focusing on intensive skill development over a one-week period. Request to be added to the contact list for upcoming dates.
						</li>
					</ul>
				</p>

				<hr />

				<a id="consulting" className="basic-header">
					<h3>Consulting & Assessment</h3>
				</a>

				<p>
					Expert guidance on learning differences and literacy acquisition is provided for families, schools, and institutions.

					<ul>
						<li>
							Informal Academic Assessments: Specific literacy gaps are identified to provide a clear roadmap for remedial programs.
						</li>
						<li>
							Early Learner Observations: Brief observations and recommendations are available to support early intervention strategies for young students.
						</li>
						<li>
							IEP Advocacy & Support: Representation is provided at Individual Education Plan (IEP) meetings to ensure school-based support aligns with the learner's specific needs.
						</li>
						<li>
							Professional Speaking: Presentations are available on topics including dyslexia, English as an Additional Language (EAL), and the science of literacy acquisition.
						</li>
					</ul>
				</p>

				<hr />
				<h4>Educational Resources & Literacy Tools</h4>
				<p>
					I currently offer a growing collection of literacy resources designed for purchase. Ranging from informative slide presentations or infographics to targeted practice worksheets and apps, these materials are designed for parents supporting a learner at home or educators seeking evidence-based classroom tools.
				</p>
				<Link to={"/resources"}>[Browse the Resource Shop]</Link>

				<p>
					<i>
						While a selection of materials is available for purchase now, I am continually developing and adding new tools to this collection. Stay informed and join the waitlist to be the first to know when new specialized tools and resources are released.
					</i>
				</p>

				<Link to={"mailto:azzadaba@literacywellness.com"}>[ Join the Waitlist ]</Link>
			</div>
		)
	};

	return <Infobox data={data} />;
}
