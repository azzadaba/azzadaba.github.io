import React from "react";
import Infobox from "../components/infobox";


export default function AssistiveTech() {

  let data = {
    header: (<h2>Viewpoint on Assistive Technology</h2>),
    text: (
      <div>
        <p>
          Assistive technology tools and interventions can provide valuable support to individuals with dyslexia and other learning differences, helping them overcome challenges and enhance their learning experience. It is often a crucial tool to accessing grade-appropriate curriculum, meeting assignment deadlines and editing written work.
          <br /><br />
          While assistive technology has many important benefits, it should not replace appropriate educational interventions, such as specialized instruction and support from trained professionals. Assistive technology should be viewed as a supplement to existing interventions, tailored to individual needs, and used in conjunction with appropriate educational strategies.
          <br /><br />
          Here are a few commonly used and well-regarded assistive technologies:
          <ul>
            <li>
              Text-to-speech software: Speechify, Read&Write, Google Text-to-Speech, Microsoft Immersive Reader
            </li>
            <li>
              Speech recognition software: Read&Write, Google Speech-to-Text, Microsoft Azure Speech Services, Apple Siri, Dragon Naturally Speaking
            </li>
            <li>
              Optical character recognition (OCR): Google Docs, Office Lens, Readiris, Tesseract OCR, Adobe Acrobat
            </li>
            <li>
              Mind-mapping tools: Kidspiration, iMindmap (Ayoa), FreeMind, MindManager, XMind, MindMeister, Coggle
            </li>
            <li>
              Digital organization tools: Evernote, Microsoft OneNote, Todoist, Google Keep, Remind

            </li>
          </ul>
        </p>
      </div>
    )
  }

  return (
    <Infobox data={data} />
  );
}