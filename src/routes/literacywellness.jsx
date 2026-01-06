import React from "react";
import Infobox from "../components/infobox";
import { Link } from "react-router-dom";


export default function LiteracyWellness() {

	let data = {
		header: (<h2>Welcome to Literacy Wellness!</h2>),
		text: (
			<div>
				<a id="empowering" className="basic-header">
					<h3><i>Empowering Learners for Life</i></h3>
				</a>
				
				<p>
					Literacy wellness is the foundation for a confident, connected life. It refers to the vital role that reading, writing, and language skills play in supporting a person's overall well-being and quality of life. Literacy is the primary tool we use to access resources, make informed choices, and communicate effectively in an increasingly complex world.
					<br /><br />
					Literacy is more than just reading and writing; it is a necessary tool for navigating the world and staying connected. Strengthening these skills enhances personal growth and supports mental wellness at every stage of life.Whether you are a parent seeking support for a child or an educator looking for evidence-based resources, you are in the right place.
				</p>

				<hr />

				<a id="navigating" className="basic-header">
					<h3>Navigating this Platform</h3>
				</a>

				<p>
					I invite you to explore the resources and information available to help you on your way: 
					<ul>
						<li>
							<Link to={"/about"}>About Me</Link>: Explore my professional background, my specialized training in Structured Literacy, and the core philosophy that drives my 1:1 remedial support.
						</li>
						<li>
							<Link to={"/services"}>Services</Link>: Discover my hybrid approach to remediation, combining the structured scaffolding of <b>Orton-Gillingham</b> with the deep analysis of <b>Structured Word Inquiry (SWI)</b>.
						</li>
						<li>
							The Learning Hub: Dive deep into the science behind literacy. Learn about Phonology, Morphology, and Etymology, and understand how these pillars support the neurodiverse mind in acquiring literacy skills.
						</li>
						<li>
							<Link to={"/assistivetech"}>Assistive Technology</Link>: Explore a curated list of modern tools that level the playing field, from Text-to-Speech to digital organization suites.
						</li>
						<li>
							<Link to={"/resources"}>The Resource Shop</Link>: Browse my growing library of practitioner-grade materials, including instructional slides, infographics, and practice templates for families and educators.
						</li>
					</ul>
				</p>

				<a id="journey" className="basic-header">
					<h3>Start Your Journey</h3>
				</a>

				<p>
					If you're ready to address the root causes of literacy challenges through a tailored, evidence-based framework, I am here to help.

					<br />
					<Link to={"/book"}>[Book a Consultation]</Link> | <Link to={"/resources"}>[Browse Resources]</Link>
				</p>

			</div>

		),
		image: "logo.png",
		hasModel: true
	}

	return (
		<Infobox data={data} />
	);
}