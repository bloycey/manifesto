import React from "react";
import styled from '@emotion/styled';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ThemeCardsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	cursor: pointer;
`;

const CardWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: 30%;
`;

const ThemeName = styled.p`
	padding-top: 10px;
	text-align: center;
	margin-bottom: 30px;
`;

const SelectedCheck = styled.div`
	display: inline-block;
	position: absolute;
	right: 0;
	top: 0;
	transform: translate(20%, -25%);

	svg {
		width: 40px;
		height: 40px;
		color: ${props => props.theme.colors.secondary};
	}
`

const ThemeOptions = ({themes, onClickFn, selectedTheme}) => {
	return (
		<ThemeCardsWrapper>
			{themes.map(theme => (
				<CardWrapper key={theme.name}>
					{selectedTheme === theme.key &&
						<SelectedCheck>
							<CheckCircleIcon />
						</SelectedCheck>
					}
					<img 
						src={theme.images.thumbnail}
						alt={`${theme.name} preview`} 
						data-value={theme.key}
						onClick={onClickFn}
					/>
					<ThemeName>
						{selectedTheme === theme.key
							? <strong>{theme.name}</strong>
							: <span>{theme.name}</span>
						}
					</ThemeName>
				</CardWrapper>
			))}
		</ThemeCardsWrapper>
	)
}

export default ThemeOptions;