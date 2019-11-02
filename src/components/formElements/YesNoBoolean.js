import React from "react";
import "./YesNoBoolean.css";
import { FormElement } from "../formElements/SingleInput";
import Label from "../formElements/Label";

const YesNoBoolean = ({ onChangeFn}) => {
	return (
		<FormElement>
			<Label>Show Date</Label>
			<ul>
				<li></li>
				<li>
				<input type="radio" id="yes-option" name="showDate" defaultChecked onChange={onChangeFn}/>
				<label htmlFor="yes-option">Yes</label>
				<div className="check"></div>
			</li>
			<li>
				<input type="radio" id="no-option" name="showDate" onChange={onChangeFn}/>
				<label htmlFor="no-option">No</label>
				<div className="check"><div className="inside"></div></div>
			</li>
				<li></li>
			</ul>
		</FormElement>
	)
}

export default YesNoBoolean;
