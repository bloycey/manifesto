import React, { Component } from 'react';
import styled from '@emotion/styled';
import { compressToEncodedURIComponent as compress } from "lz-string";
import { Link } from "react-router-dom";

import Container from "../components/layoutHelpers/Container";
import FormPageOne from "./formElements/formPages/formPageOne";
import FormPageTwo from "./formElements/formPages/formPageTwo";
import FormPageThree from "./formElements/formPages/formPageThree";
import { postThemes } from "../theming/theme";

const CreateBlogWrapper = styled.section`
	background-color: ${props => props.theme.colors.primary};
	padding-top: 72px;
	padding-bottom: 72px;
`;

const MessagesContainer = styled.div`
	margin-left: 20%;
	color: #ffffff;

	a {
		color: #ffffff;
	}
`;


class CreateBlog extends Component {
	state = {
		formProgress: 3,
		title: "",
		body: "",
		author: "",
		website: "",
		theme: "ronBurgundy",
		showDate: true,
		linkToPost: null
	}

	handleSubmit = e => {
		e.preventDefault();
		const { title, body } = this.state;
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

	handleRadioChange = e => {
		const val = this.state[e.target.name];
		this.setState({
			[e.target.name]: !val
		})
	}

	handleChooseTheme = e => {
		const themeName = e.target.getAttribute('data-value');
		this.setState({
			theme: themeName
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
			website,
			theme
		} = this.state;
		return (
			<CreateBlogWrapper>
				<Container>
					<form onSubmit={this.handleSubmit}>
						{ formProgress === 1 &&
							<FormPageOne
								title={title}
								body={body}
								onChangeFn={this.handleChange}
								handleNextFn={this.handleNext}
							/>
						}
						{ formProgress === 2 &&
							<FormPageTwo
								author={author}
								website={website}
								onChangeFn={this.handleChange}
								onRadioChangeFn={this.handleRadioChange}
								onNextFn={this.handleNext}
								onPrevFn={this.handlePrev}
							/>
						}
						{ formProgress === 3 &&
							<FormPageThree
								themes={postThemes}
								selectedTheme={theme}
								themeSelectFn={this.handleChooseTheme}
								onNextFn={this.handleNext}
								onPrevFn={this.handlePrev}
							/>
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
