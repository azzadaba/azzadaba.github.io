import React from "react";
import Infobox from "../components/infobox";


export default function Orthography() {

    let data = {
        header: (<h2>What is literacy wellness?</h2>),
        text: (<p>
            Language orthography refers to the set of conventions and rules used for representing the written form of a language. It encompasses the spelling, punctuation, capitalization, and syntax. Orthography plays a crucial role in literacy and communication, as it provides a visual representation of language that allows individuals to read, write, and understand written texts. The level of orthographic depth or shallowness in an alphabetic writing system indicates how closely a written language aligns with a simple one-to-one relationship between letters and sounds. \
            Shallow (transparent) orthographies are characterized by a straightforward spelling-sound connection, where the pronunciation of words can be determined directly from the spelling. These orthographies, also known as phonemic orthographies, maintain a consistent one-to-one relationship between the graphemes (letters) and phonemes (sounds) of a language. Examples of shallow orthographies include Spanish, Finnish, Turkish, and Italian.\
            On the other hand, deep (opaque) orthographies, such as English, French and Arabic,  exhibit a less direct relationship between the sounds (phonemes) and the letters (graphemes) representing them. This discrepancy can arise from factors such as etymology or morphophonemic structures. The inconsistencies and multiple variations in spelling patterns can lead to difficulties in recognizing and mapping the appropriate sounds to the corresponding letters or letter combinations.\
            Therefore, languages with deep orthographies, pose greater challenges for individuals with dyslexia. Because of the complexities of the phonological and morphological structures in these languages, a dyslexic's struggles with reading, writing and spelling will be more pronounced."
            </p>)
    }

    return (
        <Infobox data = {data}/>
    );
}