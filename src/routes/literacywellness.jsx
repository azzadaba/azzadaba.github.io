import React from "react";
import Infobox from "../components/infobox";


export default function LiteracyWellness() {

    let data = {
        header: (<h2>What is literacy wellness?</h2>),
        subheader: (<h4>Testing a subheader</h4>),
        text: (<p> 
                "Literacy wellness" is seen as a concept that recognizes the importance of literacy skills in promoting overall well-being and quality of life. It involves initiatives and strategies aimed at enhancing literacy abilities to empower individuals to make informed decisions, engage in meaningful activities, access resources and information, and navigate the complexities of the modern world. By promoting literacy, individuals can potentially improve their overall wellness and achieve their full potential in different aspects of life.
                <br/><br/>
                Literacy skills are crucial for personal empowerment and lifelong learning. They enable individuals to access knowledge, information, and resources necessary for personal and professional growth. Literacy also facilitates effective communication, enabling individuals to express their thoughts, ideas, and emotions clearly. It fosters social interaction, helps build relationships, and promotes active participation in society.
                <br/><br/>
                By being able to read, write, and understand information, individuals are better equipped to access knowledge and resources, make informed decisions, communicate effectively, and engage in lifelong learning. These abilities can positively impact various aspects of wellness, such as mental, emotional, and social well-being.
        </p>),
        image: "logo.png",
        hasModel: true
    }

    return (
        <Infobox data = {data}/>
    );
}