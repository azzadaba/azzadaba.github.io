import React from "react";
import Infobox from "../components/infobox";


export default function Morphological() {

	let data = {
		header: (<h2>Morphological Processing</h2>),
		text: (
			<div>
				<p>
					Morphology is the branch of linguistics that deals with the internal structure of words and how they are formed. It examines morphemes, which are the smallest meaningful units of language.
					<br /><br />
					Morphological processing is the ability to recognize and manipulate these morphemes. When children have strong morphological awareness skills, they are better able to understand how words are formed and how the meaning of words can be changed by adding or removing morphemes. This type of understanding can be especially helpful when reading more advanced texts that contain many unfamiliar words.
					<br /><br />
					Morphological awareness training may be particularly helpful for dyslexic children who struggle with decoding complex words. By teaching children to recognize and manipulate morphemes, they can improve their ability to break down complex words into smaller, more manageable parts, which can make the process of decoding words easier and more efficient. In addition, children who have strong morphological awareness skills tend to have better vocabularies and better reading comprehension overall.
				</p>
			</div>
		)
	}

	return (
		<Infobox data={data} />
	);
}