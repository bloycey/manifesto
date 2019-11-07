import React from "react";
import styled from '@emotion/styled';

import {themeObject} from "../../theming/theme";

const PreviewWrapper = styled.div`
	background-color: ${props => props.currentTheme.colors.background};
`

const PreviewPanel = ({ currentTheme, children }) => {
	if(currentTheme === null){
		return null;
	}

	const theme = themeObject[currentTheme];
	console.log("current theme", currentTheme);
	console.log("theme object", themeObject);
	console.log("the theme", theme);
	console.log("theme object", Object.keys(themeObject));

	return (
		<PreviewWrapper currentTheme={theme}>
			{children}
		</PreviewWrapper>
	);
}

export default PreviewPanel;