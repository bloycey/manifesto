import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/core';

import Label from "../formElements/Label";
import SelectedCheck from "../formElements/SelectedCheck";
import { FormElement } from "./SingleInput";

const BooleanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 5%;
	justify-content: space-between;
	flex: 4;
	margin: 0;
	padding: 0;
`;

const BooleanOption = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	cursor: pointer;
	position: relative;
	margin-left: 5%;
`;

const BooleanOptionTrue = styled.div`
	${BooleanOption}
	background-color: ${props => props.showDate === "true" ? "#D4DFE2" : "#ffffff"};
	border: 2px solid ${props => props.showDate === "true" ? "#779FAC" : "#ffffff"};
`;

const BooleanOptionFalse = styled.div`
	${BooleanOption}
	background-color: ${props => props.showDate === "false" ? "#D4DFE2" : "#ffffff"};
	border: 2px solid ${props => props.showDate === "false" ? "#779FAC" : "#ffffff"};
`;

const BooleanOptions = ({ showDate, onChangeFn}) => {
	return (
		<FormElement>
			<Label>Show Date</Label>
			<BooleanWrapper>
				<BooleanOptionTrue data-name="showDate" data-value="true" showDate={showDate} onClick={onChangeFn}>
					Yes
					{showDate === "true" && <SelectedCheck />}
				</BooleanOptionTrue>
				<BooleanOptionFalse data-name="showDate" data-value="false" showDate={showDate} onClick={onChangeFn}>
					No
					{showDate === "false" && <SelectedCheck />}
				</BooleanOptionFalse>
			</BooleanWrapper>
		</FormElement>
	)
}

export default BooleanOptions;