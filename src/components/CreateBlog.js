import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import { compressToEncodedURIComponent as compress } from "lz-string";
import { Link } from "react-router-dom";

import ActionButtons from "./formElements/ActionButtons";
import Container from "../components/layoutHelpers/Container";
import FormPageOne from "./formElements/formPages/formPageOne";
import FormPageTwo from "./formElements/formPages/formPageTwo";
import FormPageThree from "./formElements/formPages/formPageThree";
import Post, { findCurrentTheme } from "../components/Post";
import { postThemes } from "../theming/theme";

const CreateBlogWrapper = styled.section`
	background-color: ${props => props.formProgress === 3
		? props.currentTheme.colors.background
		: props.theme.colors.primary
	};
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

const testData = {
	title: "November for Beginners",
	author: "Rita Dove",
	body:`
Snow would be the easy
way out—that softening
sky like a sigh of relief
at finally being allowed
to yield. No dice.
We stack twigs for burning
in glistening patches
but the rain won’t give.

So we wait, breeding
mood, making music
of decline. We sit down
in the smell of the past
and rise in a light
that is already leaving.
We ache in secret,
memorizing

a gloomy line
or two of German.
When spring comes
we promise to act
the fool. Pour,
rain! Sail, wind,
with your cargo of zithers!`,
	date: "15th November, 2019",
	website: "https://www.poetryfoundation.org/poetrymagazine/poems/55630/november-for-beginners-56d2376810b48"
}

const useTestData = true;


class CreateBlog extends Component {
	state = {
		formProgress: 3,
		title: useTestData ? testData.title : "",
		body: useTestData ? testData.body : "",
		author: useTestData ? testData.author : "",
		website: useTestData ? testData.website : "",
		theme: "ronBurgundy",
		showDate: "Yes",
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

	handleChangeDate = value => {
		this.setState({
			showDate: value
		});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleRadioChange = e => {
		const radioName = e.target.getAttribute('data-name');
		const radioVal = e.target.getAttribute('data-value');
		const val = this.state[radioName];

		if( radioVal === val){
			return null;
		}

		this.setState({
			[radioName]: val === "true" ? "false" : "true"
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
			theme,
			showDate
		} = this.state;

		const currentTheme = findCurrentTheme(theme);

		return (
			<Fragment>
				<CreateBlogWrapper formProgress={formProgress} currentTheme={currentTheme}>
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
									onChangeDate={this.handleChangeDate}
									showDate={showDate}
									onNextFn={this.handleNext}
									onPrevFn={this.handlePrev}
									dateLabelText="Show Date"
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
					</Container>
				</CreateBlogWrapper>
				{ formProgress === 3 &&
					<Fragment>
						<Post
							theme={theme}
							title={title}
							body={body}
							author={author}
							website={website}
							preview={true}
						/>
						<CreateBlogWrapper formProgress={formProgress} currentTheme={currentTheme}>
							<Container>
							<ActionButtons onPrevFn={this.handlePrev} onSaveFn={this.handleSave} onSubmitFn={this.handleSubmit} />
									{linkToPost &&
										<MessagesContainer>
											Blog Posted. Click <Link to={linkToPost}>here</Link> to view.
										</MessagesContainer>
									}
							</Container>
						</CreateBlogWrapper>
					</Fragment>
				}
			</Fragment>
		);
	}
}

export default CreateBlog
