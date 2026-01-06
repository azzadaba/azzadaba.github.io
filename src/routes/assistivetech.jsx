import React from "react";
import Infobox from "../components/infobox";


export default function AssistiveTech() {

  let data = {
    header: (<h2>Leveraging Assistive Technology</h2>),
    text: (
      <div>
        <p>
          In a modern educational landscape, Assistive Technology (AT) serves as a vital bridge between a student’s potential and their academic performance.
        </p>

        <a id="supplement" className="basic-header">
          <h3>Technology as a Supplement, Not a Substitute</h3>
        </a>
        <p>
          While the benefits of AT are profound, it is important to view these tools as supplementary. For individuals with dyslexia, AT is not a substitute for remedial instruction; rather, it acts as a "leveler of the playing field"—providing accessibility and independence in the classroom while we continue the intensive work of remediation in our 1:1 sessions.
        </p>

        <hr />
        <a id="supplement" className="basic-header">
          <h3>1. Text-to-Speech (TTS): Auditory Access to Information</h3>
        </a>

        <p>
          TTS technology converts digital text into spoken words, allowing students to "ear read." This reduces the cognitive load of decoding and improves comprehension.
        </p>
        <ul>
          <li>
            Speechify: A leading AI-driven app that uses natural-sounding voices to read any text, from PDFs to physical books (via a camera scan).
          </li>
          <li>
            NaturalReader: A versatile tool for web browsers and mobile devices that helps students keep up with high-volume reading assignments.
          </li>
          <li>
            Immersive Reader (Microsoft): A free, built-in tool in OneNote and Word that enhances readability by adjusting spacing, highlighting parts of speech, and providing a picture dictionary.
          </li>
          <li>
            Read&Write (Texthelp): A comprehensive toolbar that sits atop digital documents, offering text-to-speech alongside integrated vocabulary support and highlighting tools.
          </li>
          <li>
            Google Docs (Select-to-Speak): A streamlined accessibility feature within the Chrome ecosystem that allows for immediate auditory feedback of highlighted digital text.
          </li>
        </ul>

        <a id="sst" className="basic-header">
          <h3>2. Speech-to-Text (STT): Capturing the Voice of the Writer</h3>
        </a>

        <p>
          Dictation tools allow students to bypass the "graphomotor" bottleneck of handwriting and spelling, enabling them to express complex ideas fluently.
        </p>
        <ul>
          <li>
            Otter.ai: An advanced transcription tool that is excellent for students who need to record lectures or "talk through" their essay outlines, providing a searchable text transcript in real-time.
          </li>
          <li>
            Voice Typing (Google Docs/Apple Dictation): Highly accurate, built-in tools that have become the standard for drafting written work without the frustration of spelling barriers.
          </li>
          <li>
            Dragon NaturallySpeaking: The industry standard for high-level speech recognition, offering deep customization and the ability to learn a student’s specific vocabulary and speech patterns.
          </li>
        </ul>

        <a id="suites" className="basic-header">
          <h3>3. Reading and Writing Support Suites</h3>
        </a>
        <ul>
          <li>
            C-Pen Reader 2: A handheld "reading pen" that allows students to scan printed text and hear it read aloud through headphones. The latest version includes a built-in dictionary and storage for scanned text.
          </li>
          <li>
            Grammarly & QuillBot: Beyond simple spell-check, these AI-powered assistants help with sentence structure, synonym selection, and paraphrasing, providing "just-in-time" grammar support.
          </li>
          <li>
            Kami: A digital classroom tool that allows students to annotate PDFs using voice notes or drawings, making worksheets accessible and interactive.
          </li>
          <li>
            Mind-Mapping & Visual Organization: These tools (such as Inspiration, XMind, or Coggle) help students see the "big picture" of an assignment by visually mapping ideas before the writing process begins.
          </li>
        </ul>

        <a id="specialized" className="basic-header">
          <h3>4. Specialized Fonts and Layouts</h3>
        </a>
        <ul>
          <li>
            OpenDyslexic & BeeLine Reader: Tools that change the visual presentation of text. BeeLine Reader uses a color gradient to help the eyes move from one line to the next, reducing "line skipping" and visual fatigue.
          </li>
        </ul>

        <hr />
        <p>
          By teaching students how to use these technologies strategically, we empower them to become independent, self-advocating learners.
        </p>
      </div>
    )
  }

  return (
    <Infobox data={data} />
  );
}