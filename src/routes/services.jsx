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
                    Private, 1:1 remedial literacy intervention is provided for learners of all ages, from early childhood through adulthood. These sessions are designed to identify and address the root causes of literacy challenges through a highly tailored, evidence-based framework.
                </p>

                <ul>
                    <li>
                        <strong>Assessment-Led Programming:</strong> Every program begins with a targeted academic assessment to identify specific knowledge gaps and establish a personalized intervention plan.
                    </li>
                    <li>
                        <strong>Comprehensive Skill Building:</strong> One-hour sessions target all aspects of literacy, including phonological and morphological awareness, reading fluency, comprehension, writing composition, spelling, grammar, and syntax.
                    </li>
                    <li>
                        <strong>Tailored and Specialized Methodology:</strong> Instruction is customized to the learner's unique profile, using a specialized hybrid of Orton-Gillingham and Structured Word Inquiry (SWI) principles, integrating the Literacy Wellness frameworks.
                    </li>
                    <li>
                        <strong>In-Person & Remote Options:</strong> Sessions are primarily offered in-person during and after school hours to ensure maximum engagement. Online sessions may be available on a case-by-case basis depending on specific circumstances.
                    </li>
                    <li>
                        <strong>Summer Intensives:</strong> Small-group "mini-camps" are offered during the summer months, focusing on intensive skill development over a one-week period. Request to be added to the contact list for upcoming dates.
                    </li>
                </ul>

                <hr />

                <a id="consulting" className="basic-header">
                    <h3>Consulting & Assessment</h3>
                </a>
                <p>
                    Expert guidance on learning differences and literacy acquisition is provided for families, schools, and institutions.
                </p>

                <h4>Standardized Academic Achievement Assessments</h4>
                <p>
                    A comprehensive formal academic achievement assessment including the following standardized measures evaluate a learner’s current academic standing compared to their peers.
                </p>
                <ul>
                    <li>
                        <strong>Wechsler Individual Achievement Test (WIAT-IV):</strong> A comprehensive, individually administered test designed to assess academic skills in reading, writing, math and oral language. It is used to identify specific academic strengths and weaknesses to guide educational intervention and identify individuals at risk of learning disabilities.
                    </li>
                    <li>
                        <strong>Gray Oral Reading Tests (GORT-5):</strong> A more detailed measure of oral reading rate, accuracy, fluency, and comprehension, helping to pinpoint specific breakdowns in reading efficiency.
                    </li>
                    <li>
                        <strong>Test of Receptive & Expressive Morphology (TERM):</strong> An evaluation of a student’s ability to understand and use word parts (prefixes, suffixes, and roots), which is fundamental to vocabulary development and reading comprehension.
                    </li>
                </ul>

                <h4>Comprehensive Literacy Screening & Observations</h4>
                <ul>
                    <li>
                        <strong>Comprehensive Literacy Screening:</strong> A brief but comprehensive screening encompassing phonological awareness, rapid naming, reading, spelling, and writing skills analysis. Used to identify individuals (specifically young children), who are at risk for LDs and to provide a roadmap for remediation.
                    </li>
                    <li>
                        <strong>Early Learner Observations:</strong> Onsite observations and recommendations are available to support early intervention strategies for young students by identifying early indicators of learning challenges.
                    </li>
                </ul>

                <h4>Advocacy & Professional Services</h4>
                <ul>
                    <li>
                        <strong>IEP Advocacy & Support:</strong> Representation is provided at Individual Education Plan (IEP) meetings to ensure school-based support and accommodations align strictly with the learner's specific academic needs.
                    </li>
                    <li>
                        <strong>Professional Speaking:</strong> Presentations and workshops are available on topics including dyslexia, English as an Additional Language (EAL), and the science of literacy acquisition.
                    </li>
                </ul>

                <p><em>*Note: These assessments focus on academic achievement and literacy skills for educational planning and progress monitoring; they do not constitute a psychological or medical diagnosis.</em></p>

                <hr />
                <h3>Educational Resources & Literacy Tools</h3>
                <p>
                    Explore a growing collection of evidence-based literacy resources curated for both home and classroom use. From informative presentations and infographics to targeted practice apps and workbooks, including the <strong>Spell-o-Logic™</strong> and <strong>Morph-o-Logic™</strong> series. These tools represent the <strong>culmination of my twenty years of specialized expertise</strong> in remedial literacy and inclusive education.
                </p>
                <Link to={"/resources"}>Browse the Resource Shop</Link>

                <p>
                    <i>
                        New specialized tools and digital workbooks are continually in development. To receive updates on new releases and gain early access to specialized resources across various platforms, join the waitlist below.
                    </i>
                </p>

                <Link to={"mailto:azzadaba@literacywellness.com"}>Join the Waitlist</Link>
            </div>
        )
    };

    return <Infobox data={data} />;
}
