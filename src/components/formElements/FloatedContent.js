import React, {Fragment} from "react";
import styled from '@emotion/styled';

import { Label } from "../formElements/SingleInput";
import { FloatedFormElement } from "../formElements/TextArea";

const Content = styled.div`
	float: right;
	width: 80%;
	background-color: #ffffff;
	padding: 30px 40px;
`;

const FloatedContent = ({title, children}) => {
	return (
		<FloatedFormElement>
			<Label>
				<p>{title}</p>
			</Label>
			<Content>
				{children}
			</Content>
		</FloatedFormElement>
	)
}

export default FloatedContent;