import React from "react";
import "./YesNoBoolean.css";

const YesNoBoolean = () => {
	return (
		<ul>
			<li>
				<input type="radio" id="f-option" name="selector" checked />
				<label for="f-option">Yes</label>
				<div class="check"></div>
			</li>
			<li>
				<input type="radio" id="s-option" name="selector" />
				<label for="s-option">No</label>
				<div class="check"><div class="inside"></div></div>
			</li>
		</ul>
	)
}

export default YesNoBoolean;
