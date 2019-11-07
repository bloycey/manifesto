import React from "react";
import styled from '@emotion/styled';

import Button from "../Button";

const ButtonWrapper = styled.div`
	margin-left: 20%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;

	button {
		width: 100%;
		margin-left: 24px;
		margin-right: 24px;
	}

	button:first-of-type, button:last-of-type {
		margin-left: 0;
		margin-right: 0;
	}
`;

const ActionButtons = ({ onPrevFn, onSaveFn, onSubmitFn }) => {
	return (
		<ButtonWrapper>
			<Button buttonStyle="outline" buttonType="button" clickEvent={onPrevFn}>Previous</Button>
			<Button buttonType="button" buttonStyle="outline" clickEvent={onSaveFn}>Save</Button>
			<Button buttonType="submit" buttonStyle="primary" clickEvent={onSubmitFn}>Post</Button>
		</ButtonWrapper>
	)
}

export default ActionButtons;