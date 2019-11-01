import React, { Fragment } from "react";
import styled from '@emotion/styled';

const ThemeCardsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyleCard = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 30px;
	background-color: ${props => props.theme.colors.background};
	color: #ffffff;
	height: 180px;
`;

const ThemeStripe = styled.div`
	position: absolute;
	z-index: 1000;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 20px;
	background-color: ${props => props.theme.colors.footerStripe};
`;

const CardWrapper = styled.div`
	display: inline-block;
	width: 30%;
`;

const ThemeHeading = styled.h3`
	font-family: ${props => props.theme.fonts.heading};
`;

const ThemeBody = styled.p`
	font-family: ${props => props.theme.fonts.body};
`;

const ThemeName = styled.p`
	padding-top: 10px;
	text-align: center;
`

const ThemeOptions = ({themes}) => {
	return (
		<ThemeCardsWrapper>
			{themes.map(theme => {
				return (
					<CardWrapper>
					<StyleCard theme={theme}>
					<ThemeHeading theme={theme}>Heading Text</ThemeHeading>
					<ThemeBody theme={theme}>Body Text</ThemeBody>
					<ThemeStripe theme={theme}/>
					</StyleCard>
					<ThemeName>{theme.name}</ThemeName>
					</CardWrapper>
					)
				})
			}
		</ThemeCardsWrapper>
	)
}

export default ThemeOptions;