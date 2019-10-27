import React from "react";
import "./Manifesto.css";
import { decompressFromEncodedURIComponent as decompress } from "lz-string";

const Manifesto = (props) => {
	console.log(props);
	const { data } = props.match.params;
	const [title, text] = data.split("__");
	const decompressedTitle = decompress(title);
	const decompressedText = decompress(text);
	return (
		<div>
			<p>{decompressedTitle}</p>
			<p>{decompressedText}</p>
		</div>
	);
}

export default Manifesto;