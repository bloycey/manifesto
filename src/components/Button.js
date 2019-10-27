import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { theme } from "../theming/theme";

const getButtonStyle = buttonType => {
	switch(buttonType) {
		case "outline":
			return css`
				border: 2px solid #ffffff;
				background-color: transparent;
			`
		case "primary":
			return css`
				border: 0;
				background-color: ${theme.colors.secondary}
			`
	}
}

const StyledButton = styled.button`
	height: 58px;
	color: #ffffff;
	text-transform: uppercase;
	font-weight: 700;
	${props => getButtonStyle(props.buttonType)};

	&:hover {
		cursor: pointer;
	}
`;

const Button = ({ buttonType, children, icon }) => {
	return (
		<StyledButton buttonType={buttonType}>
			{ children }
		</StyledButton>
	)
}

export default Button;