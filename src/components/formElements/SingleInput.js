import React from 'react'
import styled from '@emotion/styled';

const FormElement = styled.div`
	display: flex;
	margin-bottom: 60px;
`;

export const Label = styled.label`
	background-color: ${props => props.theme.colors.secondary};
	color: #ffffff;
	flex-basis: 100%;
	flex: 1;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 18px;
`;

export const InputWrapper = styled.div`
	background-color: #ffffff;
	flex: 4;
	overflow: hidden;

	input {
		color: ${props => props.theme.colors.bodyText};
		height: 60px;
		border: 0;
		padding: 0;
		padding-left: 36px;
		width: 100%;
		font-size: 18px;
		max-width: 100%;
	}

	input::placeholder {
		opacity: 0.7;
	}
`;

const SingleInput = ({ title, inputType, inputName, placeholder, value, onChangeFn }) => {
	return (
		<FormElement>
			<Label>
				<p>{title}</p>
			</Label>
			<InputWrapper>
				<input
					type={inputType}
					placeholder={placeholder}
					name={inputName}
					value={value}
					onChange={onChangeFn}
				/>
			</InputWrapper>
		</FormElement>
	)
}

export default SingleInput;