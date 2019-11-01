import React, { Fragment } from "react";
import styled from '@emotion/styled';

const StyleCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.colors.background};
	color: #ffffff;
	height: 200px;
	width: 30%;
`

const ThemeHeading = styled.h4`
	font-family: ${props => props.theme.fonts.heading};
`;

const ThemeBody = styled.p`
	font-family: ${props => props.theme.fonts.body};
`;

const ThemeOptions = ({themes}) => {
	return (
		themes.map(theme => {
			return (
				<Fragment>
					<StyleCard theme={theme}>
						<ThemeHeading theme={theme}>Heading Text</ThemeHeading>
						<ThemeBody theme={theme}>Body Text</ThemeBody>
					</StyleCard>
					{theme.name}
				</Fragment>
			)
		})
	)
}

export default ThemeOptions;