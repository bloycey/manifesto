import React from 'react'
import styled from '@emotion/styled';

import { InputWrapper } from "../formElements/SingleInput";
import Label from "../formElements/Label";

export const FloatedFormElement = styled.div`
	display: flex;
	margin-bottom: 60px;

	Label {
		float: left;
		width: 20%;
	}

	InputWrapper {
		float: right;
	}

	textarea {
		width: 100%;
		height: 500px;
		border: 0;
		margin: 0;
		padding: 18px 36px;
		font-size: 18px;
	}

	textarea::placeholder {
		opacity: 0.7;
	}
`;

const TextArea = ({ title, name, placeholder, value, onChangeFn }) => {
	return (
		<FloatedFormElement>
			<Label>{title}</Label>
			<InputWrapper>
				<textarea
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChangeFn}
				/>
			</InputWrapper>
		</FloatedFormElement>
	);
};

export default TextArea;