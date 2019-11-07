import React from "react";
import styled from "@emotion/styled";
import allThemes from "../theming/theme";

const PostTitle = styled.h1`
	padding-top: 220px;
	font-size: ${props => props.theme.sizes.heading};
	color: ${props => props.theme.colors.heading};
	line-height: ${props => props.theme.sizes.headingLineHeight};
`;

const PostBody = styled.p`
	white-space: pre-wrap;
	font-size: ${props => props.theme.sizes.body};
	color: ${props => props.theme.colors.text};
	line-height: ${props => props.theme.sizes.bodyLineHeight};
	padding-bottom: 220px;
`;

const PostContainer = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	width: 750px;
`;

const PostWrapper = styled.div`
	min-height: 100vh;
	background-color: ${props => props.theme.colors.background};
`;
const Divider = styled.hr`
	border-color: #ffffff;
	width: 15%;
	display: inline-block;
	margin-top: 40px;
	margin-bottom: 60px;
`;

const Post = ({ theme, title, body }) => {

	if(!theme || !title || !body){
		return null;
	}

	const findCurrentTheme = (themeKey, themeArray) => {
		const [filteredArray] = themeArray.filter(theme => theme.key === themeKey);
		return filteredArray;
	}
	const currentTheme = findCurrentTheme(theme, allThemes);

	return (
		<PostWrapper theme={currentTheme}>
			<PostContainer>
				<PostTitle theme={currentTheme}>{title}</PostTitle>
				<Divider />
				<PostBody theme={currentTheme}>{body}</PostBody>
			</PostContainer>
		</PostWrapper>
	);
};

export default Post;