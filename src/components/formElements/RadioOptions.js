import React from "react";
import styled from '@emotion/styled';
import { Radio, RadioGroup } from 'react-radios';

import Label from "../formElements/Label";
import SelectedCheck from "../formElements/SelectedCheck";
import { FormElement } from "./SingleInput";

const RadioGroupWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 5%;
	justify-content: space-between;
	flex: 4;
	margin: 0;
	padding: 0;
`;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	cursor: pointer;
	position: relative;
	margin-left: 5%;
	background-color: ${props => props.radioValue === props.optionValue ? props.theme.colors.mediumNeutral : "#ffffff"};
	border: 2px solid ${props => props.radioValue === props.optionValue ? props.theme.colors.secondary : "#ffffff"};

	input {
		display: none;
	}
`;

const RadioOptions = ({ radioValue, options, onChangeFn, labelText }) => {
	return (
		<FormElement>
			<Label>{labelText}</Label>
			<RadioGroupWrapper>
				<RadioGroup value={radioValue}  onChange={onChangeFn}>
					{options.map(option => {
						return (
							<StyledLabel radioValue={radioValue} optionValue={option} key={option}>
								<Radio value={option} />{option}
								{option === radioValue && <SelectedCheck />}
							</StyledLabel>
						);
					})};
				</RadioGroup>
			</RadioGroupWrapper>
		</FormElement>
	)
}



export default RadioOptions;