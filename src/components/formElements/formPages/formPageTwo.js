import React, { Fragment } from "react";
import styled from '@emotion/styled';

import Button from "../../Button";
import BooleanOptions from "../BooleanOptions";
import SingleInput from "../SingleInput";

const OptionalTag = styled.div`
	color: #9f9f9f;
	margin-top: -20px;
	margin-bottom: 5px;
`;

const ButtonWrapperPrevNext = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 20%;
	}
`;

const FormPageTwo = ({ author, website, showDate, onChangeFn, onRadioChangeFn, onNextFn, onPrevFn }) => {
	return (
		<Fragment>
			<OptionalTag>*Optional</OptionalTag>
			<SingleInput
				title="Author Name"
				inputType="text"
				inputName="author"
				placeholder="E.g. J D Salinger"
				value={author}
				onChangeFn={onChangeFn}
			/>
			<OptionalTag>*Optional</OptionalTag>
			<SingleInput
				title="Author Website"
				inputType="text"
				inputName="website"
				placeholder="www.mywebsite.com"
				value={website}
				onChangeFn={onChangeFn}
			/>
			<div>
				<BooleanOptions showDate={showDate} onChangeFn={onRadioChangeFn} />
			</div>
			<ButtonWrapperPrevNext>
				<Button buttonStyle="outline" buttonType="button" clickEvent={onPrevFn}>Previous</Button>
				<Button buttonStyle="outline" buttonType="button" clickEvent={onNextFn}>Next</Button>
			</ButtonWrapperPrevNext>
		</Fragment>
	)
}

export default FormPageTwo;