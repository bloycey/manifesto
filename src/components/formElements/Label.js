import React from "react";
import styled from '@emotion/styled';

export const LabelStyle = styled.label`
	background-color: ${props => props.theme.colors.secondary};
	color: #ffffff;
	flex-basis: 100%;
	flex: 1;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 18px;
`;

const Label = ({ children }) => {
	return (
		<LabelStyle>
			{ children }
		</LabelStyle>
	)
}

export default Label;