import React from "react";
import styled from '@emotion/styled';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const SelectedCheckCircle = styled.div`
	display: inline-block;
	position: absolute;
	right: 0;
	top: 0;
	transform: translate(50%, -50%);

	svg {
		width: 40px;
		height: 40px;
		color: ${props => props.theme.colors.secondary};
		background-color: #ffffff;
		border-radius: 50%;
	}
`

const SelectedCheck = () => {
	return (
		<SelectedCheckCircle>
			<CheckCircleIcon />
		</SelectedCheckCircle>
	)
}

export default SelectedCheck;