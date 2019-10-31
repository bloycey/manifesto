import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { theme } from "../theming/theme";

const getButtonStyle = buttonStyle => {
	switch(buttonStyle) {
		case "outline":
			return css`
				border: 2px solid #ffffff;
				background-color: transparent;
				&:hover {
					background-color: #ffffff;
					color: ${theme.colors.primary}
				}
			`
		case "primary":
			return css`
				border: 0;
				background-color: ${theme.colors.secondary};
				&:hover {
					transform: translateY(-5px);
					box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, .05);
				}
			`
	}
}

const StyledButton = styled.button`
	height: 58px;
	color: #ffffff;
	text-transform: uppercase;
	font-weight: 700;
	transition: all 0.3s ease;
	${props => getButtonStyle(props.buttonStyle)};

	&:hover {
		cursor: pointer;
	}
`;

const Button = ({ buttonType, buttonStyle, children, icon, clickEvent }) => {
	return (
		<StyledButton buttonType={buttonType} buttonStyle={buttonStyle} type="button" onClick={clickEvent}>
			{ children }
		</StyledButton>
	)
}

export default Button;