import React, { Component } from 'react';
import styled from '@emotion/styled';
import { compressToEncodedURIComponent as compress } from "lz-string";
import { Link } from "react-router-dom";

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
		width: 20%;
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
	flex: 4;
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
	margin-left: 20%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;

	button {
		width: 100%;
		margin-left: 24px;
		margin-right: 24px;
	}

	button:first-of-type, button:last-of-type {
		margin-left: 0;
		margin-right: 0;
	}
`;

const ButtonWrapperNext = styled.div`
	text-align: right;

	button {
		display: inline-block;
		width: 25%;
	}
`;

const ButtonWrapperPrevNext = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 20%;
	}
`;

const MessagesContainer = styled.div`
	margin-left: 20%;
	color: #ffffff;

	a {
		color: #ffffff;
	}
`;

const OptionalTag = styled.div`
	color: #9f9f9f;
	margin-top: -20px;
	margin-bottom: 5px;
`

class CreateBlog extends Component {
	state = {
		formProgress: 1,
		title: "",
		body: "",
		author: "",
		website: "",
		linkToPost: null
	}

	handleSubmit = e => {
		e.preventDefault();
		const { title, body, author, website } = this.state;
		const compressedTitle = compress(title);
		const compressedBody = compress(body);
		const linkToPost = `/post/${compressedTitle}__${compressedBody}`
		this.setState({
			linkToPost
		})
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleNext = () => {
		this.setState({
			formProgress: this.state.formProgress + 1
		})
	}

	handlePrev = () => {
		this.setState({
			formProgress: this.state.formProgress - 1
		})
	}

	handlePreview = () => {
		console.log("You clicked preview!");
	};

	handleSave = () => {
		console.log("You clicked save!");
	};

	render() {
		const { formProgress, linkToPost, title, body } = this.state;
		return (
			<CreateBlogWrapper>
				<Container>
					<form onSubmit={this.handleSubmit}>
						{ formProgress === 1 &&
							<>
							<FormElement>
								<Label>
									<p>Blog Title</p>
								</Label>
								<InputWrapper>
									<input type="text" ref={this.title} placeholder="E.g. How to make friends and influence people" name="title" onChange={this.handleChange}/>
								</InputWrapper>
							</FormElement>
							<FloatedFormElement>
								<Label>
									<p>Blog Body</p>
								</Label>
								<InputWrapper>
									<textarea ref={this.text} name="body" placeholder="Create your magic here" onChange={this.handleChange}/>
								</InputWrapper>
							</FloatedFormElement>
							<ButtonWrapperNext>
								<Button buttonStyle="outline" buttonType="button" clickEvent={this.handleNext}>Next</Button>
							</ButtonWrapperNext>
							</>
						}
						{ formProgress === 2 &&
						<>
							<OptionalTag>*Optional</OptionalTag>
							<FormElement>
								<Label>
									<p>Author Name</p>
								</Label>
								<InputWrapper>
									<input type="text" ref={this.author} name="author" placeholder="E.g. J D Salinger" onChange={this.handleChange}/>
								</InputWrapper>
							</FormElement>
							<OptionalTag>*Optional</OptionalTag>
							<FormElement>
								<Label>
									<p>Author Website</p>
								</Label>
								<InputWrapper>
									<input type="text" ref={this.website} name="website" placeholder="E.g. J D Salinger" onChange={this.handleChange}/>
								</InputWrapper>
							</FormElement>
							<ButtonWrapperPrevNext>
								<Button buttonStyle="outline" buttonType="button" clickEvent={this.handlePrev}>Previous</Button>
								<Button buttonStyle="outline" buttonType="button" clickEvent={this.handleNext}>Next</Button>
							</ButtonWrapperPrevNext>
							</>
						}
						{ formProgress === 3 &&
							<ButtonWrapper>
								<Button buttonStyle="outline" buttonType="button" clickEvent={this.handlePrev}>Previous</Button>
								{/* <Button buttonType="button" buttonStyle="outline" clickEvent={this.handlePreview}>Preview</Button> */}
								<Button buttonType="button" buttonStyle="outline" clickEvent={this.handleSave}>Save</Button>
								<Button buttonType="submit" buttonStyle="primary">Post</Button>
							</ButtonWrapper>
						}
					</form>
						{linkToPost &&
							<MessagesContainer>
								Blog Posted. Click <Link to={linkToPost}>here</Link> to view.
							</MessagesContainer>
						}
				</Container>
			</CreateBlogWrapper>
		);
	}
}

export default CreateBlog
