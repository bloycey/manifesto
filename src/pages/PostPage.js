import React from "react";
import styled from "@emotion/styled";
import { decompressFromEncodedURIComponent as decompress } from "lz-string";

import postThemes from "../theming/theme";

const PostTitle = styled.h1`
	padding-top: 220px;
	font-size: ${postThemes[0].sizes.heading};
	color: ${postThemes[0].colors.text};
	line-height: ${postThemes[0].sizes.headingLineHeight}
`

const PostBody = styled.p`
	white-space: pre-wrap;
	font-size: ${postThemes[0].sizes.body};
	color: ${postThemes[0].colors.text};
	line-height: ${postThemes[0].sizes.bodyLineHeight};
	padding-bottom: 220px;
`
const PostContainer = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	width: 750px;
`

const PostWrapper = styled.div`
	min-height: 100vh;
	background-color: ${postThemes[0].colors.background};
`
const Divider = styled.hr`
	border-color: #ffffff;
	width: 15%;
	display: inline-block;
	margin-top: 40px;
	margin-bottom: 60px;
`

const Post = ({ props }) => {
	const { data } = props.match.params;
	const [title, text] = data.split("__");
	const decompressedTitle = decompress(title);
	const decompressedText = decompress(text);
	return (
		<PostWrapper>
			<PostContainer>
				<PostTitle>{decompressedTitle}</PostTitle>
				<Divider />
				<PostBody>{decompressedText}</PostBody>
			</PostContainer>
		</PostWrapper>
	);
}

export default Post;