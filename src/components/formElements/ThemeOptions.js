import React, { Fragment } from "react";
import styled from '@emotion/styled';

const ThemeCardsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	cursor: pointer;
`;

const CardWrapper = styled.div`
	display: inline-block;
	width: 30%;
`;

const ThemeName = styled.p`
	padding-top: 10px;
	text-align: center;
	margin-bottom: 30px;
`

const ThemeOptions = ({themes}) => {
	return (
		<ThemeCardsWrapper>
			{themes.map(theme => (
				<CardWrapper>
					<img src={theme.images.thumbnail} />
					<ThemeName>{theme.name}</ThemeName>
				</CardWrapper>
			))}
		</ThemeCardsWrapper>
	)
}

export default ThemeOptions;