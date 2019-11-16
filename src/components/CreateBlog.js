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
When you spend eight straight years designing, developing, and supporting a product by yourself, you gain perspective. You truly feel the consequences of your decisions as they ripple through the years. When you work on a team and are able to specialize, you likely feel some pain from others’ decisions, but you don’t have the full context. And, most importantly, you likely don’t feel the full implications of your own decisions.

When you’re responsible for everything, you see a bigger picture. You hear directly from users about design decisions you thought were smart. You hear from yourself when a dependency upgrade is difficult because of a web of intertwined dependencies. It’s humbling. But you learn.

Flitting from side project to side project is fun and easy, but you don’t get to absorb the full arc of software engineering. And if something isn’t supporting paying customers, you never really feel how it all fits together.

When I started Sifter, I may have had a degree in Computer Science, but I didn’t know the first thing about software engineering. I didn’t know how to deploy. I didn’t appreciate the value of continuous integration or staging environments. Heck, I barely even wrote tests.

But over the years, when releases were delayed because of a clunky deploy process or a failure to write tests led directly to an increase in support requests, I had to change. The feedback loop becomes more direct and the consequences more immediate. With Sifter, those bad habits all evolved and improved with time as I learned, but it took some painful lessons before I really bought in.

So, with hindsight, I’m doing a lot of things differently these days. And, from casual conversations with others, I’m not alone. So what’s changed?

I’ve switched from Rspec to MiniTest. I’m much more likely to roll my own code than pull in a dependency. (This applies more to utility dependencies than frameworks. I’m certainly not building my own Postgres gem.) I’m obsessive with tests and continuous integration. I’m all about enlisting an army of robots to monitor my code for consistency, security, and anything else they’ll watch for me. I avoid polyfills when it’s my choice. And I stick with whatever conventions Rails provides rather than inventing my own just because they’re only 80% of what I need. I avoid JavaScript frameworks because Stimulus and vanilla JavaScript do more than enough. And whenever I add a dependency to my Gemfile or Package.json, I research it exhaustively first.

In short. I’ve stopped swimming upstream. And the results? I’m enjoying my work by orders of magnitude more. I’m spending less time wrestling with quirky customizations. I’m iterating quickly and more reliably. Simply put, it’s fun again.

If you ever find yourself in a place where you feel like you’re spending more time fighting with your software than building and shipping it, stop and evaluate which pieces are causing pain and why. Experiment with doing less and using fewer dependencies. I think you’ll be pleasantly surprised.`,
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
