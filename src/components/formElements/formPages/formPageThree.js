import React, { Fragment } from "react";
import styled from '@emotion/styled';

import Button from "../../Button";
import FloatedContent from "../FloatedContent";
import ThemeOptions from "../ThemeOptions";

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

const FormPageThree = ({ themes, selectedTheme, themeSelectFn, onNextFn, onPrevFn }) => {
	return (
		<Fragment>
			<FloatedContent title="Theme">
				<ThemeOptions themes={themes} onClickFn={themeSelectFn} selectedTheme={selectedTheme} />
			</FloatedContent>
			<ButtonWrapper>
				<Button buttonStyle="outline" buttonType="button" clickEvent={onPrevFn}>Previous</Button>
				<Button buttonType="button" buttonStyle="outline" clickEvent={onNextFn}>Save</Button>
				<Button buttonType="submit" buttonStyle="primary">Post</Button>
			</ButtonWrapper>
		</Fragment>
	)
}

export default FormPageThree;