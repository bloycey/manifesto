import React from "react";
import { decompressFromEncodedURIComponent as decompress } from "lz-string";

function Manifesto(props) {
	const { data } = props.match.params;
	const [title, text] = data.split("__");
	const decompressedTitle = decompress(title);
	const decompressedText = decompress(text);
	return (
		<div>
			<p>It's the manifesto page</p>
			<p>{decompressedTitle}</p>
			<p>{decompressedText}</p>
		</div>
	);
}

export default Manifesto;