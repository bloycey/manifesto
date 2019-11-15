import React from "react";
import styled from "@emotion/styled";

import Author from "./Author";
import allThemes from "../theming/theme";

const PostTitle = styled.h1(props => ({
	paddingTop: props.preview ? "50px" : "220px",
	fontSize: props.theme.sizes.heading,
	color: props.theme.colors.heading,
	lineHeight: props.theme.sizes.headingLineHeight
}));

const PostBody = styled.p(props => ({
	whiteSpace: "pre-wrap",
	fontSize: props.theme.sizes.body,
	color: props.theme.colors.text,
	lineHeight: props.theme.sizes.bodyLineHeight
}));

export const PostContainer = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	padding-bottom: ${props => props.preview ? "100px" : "220px"};
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
	border-top: 0;
	border-left: 0;
`;

const buildFindCurrentTheme = themeArray => themeKey => {
	const [filteredArray] = themeArray.filter(theme => theme.key === themeKey);
	return filteredArray;
}

export const findCurrentTheme = buildFindCurrentTheme(allThemes);

const Post = ({ theme, title, body, preview, author, website }) => {

	if(!theme || !title || !body){
		return null;
	}

	const currentTheme = findCurrentTheme(theme);

	return (
		<PostWrapper theme={currentTheme}>
			<PostContainer preview={preview}>
				<PostTitle theme={currentTheme} preview={preview}>{title}</PostTitle>
				<Divider />
				<PostBody theme={currentTheme} preview={preview}>{body}</PostBody>
				<Author author={author} website={website} theme={currentTheme}/>
			</PostContainer>
		</PostWrapper>
	);
};

export default Post;