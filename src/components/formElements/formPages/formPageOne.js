import React, { Fragment } from "react";
import styled from '@emotion/styled';

import Button from "../../Button";
import SingleInput from "../SingleInput";
import TextArea from "../TextArea";

const ButtonWrapperNext = styled.div`
	text-align: right;

	button {
		display: inline-block;
		width: 25%;
	}
`;

const FormPageOne = ({ title, body, onChangeFn, handleNextFn }) => {
	return (
		<Fragment>
			<SingleInput
				title="Blog Title"
				inputType="text"
				inputName="title"
				placeholder="E.g. How to make friends and influence people"
				value={title}
				onChangeFn={onChangeFn}
			/>
			<TextArea
				title="Blog Body"
				name="body"
				placeholder="Create your magic here"
				value={body}
				onChangeFn={onChangeFn}
			/>
				<ButtonWrapperNext>
					{title && body
						?
						<Button buttonStyle="outline" buttonType="button" clickEvent={handleNextFn}>Next</Button>
						:
						<Button buttonStyle="outline" buttonType="button" clickEvent={() => null}>Add a title and body to continue</Button>
					}
				</ButtonWrapperNext>
			}
		</Fragment>
	)
}

export default FormPageOne;