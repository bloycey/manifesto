import React, { Component } from 'react';
import styled from '@emotion/styled';
import { compressToEncodedURIComponent as compress } from "lz-string";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Container from "../components/layoutHelpers/Container";
import SingleInput from "../components/formElements/SingleInput";
import TextArea from "../components/formElements/TextArea";

const CreateBlogWrapper = styled.section`
	background-color: ${props => props.theme.colors.primary};
	padding-top: 72px;
	padding-bottom: 72px;
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
		const {
			formProgress,
			linkToPost,
			title,
			body,
			author,
			website
		} = this.state;
		return (
			<CreateBlogWrapper>
				<Container>
					<form onSubmit={this.handleSubmit}>
						{ formProgress === 1 &&
							<>
							<SingleInput
								title="Blog Title"
								inputType="text"
								inputName="title"
								placeholder="E.g. How to make friends and influence people"
								value={title}
								onChangeFn={this.handleChange}
							/>
							<TextArea
								title="Blog Body"
								name="body"
								placeholder="Create your magic here"
								value={body}
								onChangeFn={this.handleChange}
							/>
							<ButtonWrapperNext>
								<Button buttonStyle="outline" buttonType="button" clickEvent={this.handleNext}>Next</Button>
							</ButtonWrapperNext>
							</>
						}
						{ formProgress === 2 &&
						<>
							<OptionalTag>*Optional</OptionalTag>
							<SingleInput
								title="Author Name"
								inputType="text"
								inputName="author"
								placeholder="E.g. J D Salinger"
								value={author}
								onChangeFn={this.handleChange}
							/>
							<OptionalTag>*Optional</OptionalTag>
							<SingleInput
								title="Author Website"
								inputType="text"
								inputName="website"
								placeholder="www.mywebsite.com"
								value={website}
								onChangeFn={this.handleChange}
							/>
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