import React from "react";
import styled from "@emotion/styled";

const AuthorWrapper = styled.p`
	margin-top: 50px;
	color: ${props => props.textColor};

	a {
		color: ${props => props.textColor}
	}
`

const Author = ({ author, website, theme }) => {
	const noAuthorOrWebsite = !author && !website;
	const websiteAndAuthor = website && author;
	const onlyWebsite = website && !author;
	const onlyAuthor = author && !website;

	if (noAuthorOrWebsite){
		return null;
	}

	const textColor = theme && theme.colors.text;

	if (websiteAndAuthor){
		return <AuthorWrapper textColor={textColor}>A thought by <a href={website} target="_blank" rel="noopener noreferrer">{author}</a></AuthorWrapper>
	}

	if (onlyAuthor){
		return <AuthorWrapper textColor={textColor}>A thought by {author}</AuthorWrapper>
	}

	if(onlyWebsite){
		return <AuthorWrapper textColor={textColor}><a href={website} target="_blank" rel="noopener noreferrer">View website</a></AuthorWrapper>
	}
}

export default Author;