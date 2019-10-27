import React, { Component } from 'react';
import styled from '@emotion/styled';
import { compressToEncodedURIComponent as compress } from "lz-string";

import Button from "../components/Button";
import Container from "../components/layoutHelpers/Container";

const CreateBlogWrapper = styled.section`
	background-color: ${props => props.theme.colors.primary};
	padding-top: 72px;
	padding-bottom: 72px;
`;

const FormElement = styled.div`
	display: flex;
	margin-bottom: 60px;
`;

const FloatedFormElement = styled.div`
	display: block;
	margin-bottom: 60px;

	Label {
		float: left;
		width: 16.67%;
	}

	InputWrapper {
		float: right;
	}

	textarea {
		width: 100%;
		height: 500px;
		border: 0;
		margin: 0;
		padding: 18px 36px;
		font-size: 18px;
	}

	textarea::placeholder {
		opacity: 0.7;
	}
`

const Label = styled.label`
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

const InputWrapper = styled.div`
	background-color: #ffffff;
	flex: 5;
	overflow: hidden;

	input {
		color: ${props => props.theme.colors.bodyText};
		height: 60px;
		border: 0;
		padding: 0;
		padding-left: 36px;
		width: 100%;
		font-size: 18px;
		max-width: 100%;
	}

	input::placeholder {
		opacity: 0.7;
	}
`;

const ButtonWrapper = styled.div`
	margin-left: 16.67%;
	display: flex;
	justify-content: space-between;

	button {
		width: 100%;
	}

	button:nth-of-type(2) {
		margin-left: 24px;
		margin-right: 24px;
	}

`

class CreateBlog extends Component {
	constructor(props) {
		super(props);
		this.titleInput = React.createRef();
		this.textInput = React.createRef();
	}

	state = {
		linkToManifesto: null
	}

	handleSubmit = e => {
		e.preventDefault();
		const title = compress(this.titleInput.current.value);
		const text = compress(this.textInput.current.value);
		const linkToManifesto = `/post/${title}__${text}`
		this.setState({
			linkToManifesto
		})
	}

	render() {
		const { linkToManifesto } = this.state;
		return (
			<CreateBlogWrapper>
				<Container>
					<form onSubmit={this.handleSubmit}>
						<FormElement>
							<Label>
								<p>Blog Title</p>
							</Label>
							<InputWrapper>
								<input type="text" ref={this.titleInput} placeholder="E.g. How to make friends and influence people"/>
							</InputWrapper>
						</FormElement>
						<FloatedFormElement>
							<Label>
								<p>Blog Body</p>
							</Label>
							<InputWrapper>
								<textarea ref={this.textInput} placeholder="Create your magic here"/>
							</InputWrapper>
						</FloatedFormElement>
						<ButtonWrapper>
							<Button type="submit" buttonType="outline">Save</Button>
							<Button type="submit" buttonType="outline">Preview</Button>
							<Button type="submit" buttonType="primary">Post</Button>
						</ButtonWrapper>
					</form>
					{linkToManifesto &&
						<div>
							<a href={linkToManifesto}>{linkToManifesto}</a>
						</div>
					}
				</Container>
			</CreateBlogWrapper>
		);
	}
}

export default CreateBlog
