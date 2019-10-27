import React from 'react';
import styled from '@emotion/styled';

import Container from "../components/layoutHelpers/Container";
import HomeBannerImg from "../img/new_ideas.svg";

const HomeBannerWrapper = styled.section`
	background-color: ${props => props.theme.colors.lightNeutral};
`;

const BannerInner = styled.div`
	padding-top: 55px;
	padding-bottom: 55px;
	display: flex;
	align-items: center;
	width: 100%;
`;

const TitleText = styled.div`
	flex-basis: 100%;
	flex: 2;
`;

const ImgWrapper = styled.div`
	flex-basis: 100%;
	flex: 1;

	img {
		max-height: 250px;
		transform: scale(-1, 1);
	}
`

const Title = styled.h1`
	color: ${props => props.theme.colors.primary};
	font-size: 72px;
`

const Subtitle = styled.p`
	color: ${props => props.theme.colors.primary};
	font-size: 20px;
`

const HomeBanner = () => {
	return (
		<HomeBannerWrapper>
			<Container>
				<BannerInner>
					<TitleText>
						<Title>Transient.blog</Title>		
						<Subtitle>Get your thoughts out there. Everything you need. Nothing you don't.</Subtitle>	
					</TitleText>
					<ImgWrapper>
						<img src={HomeBannerImg} alt="illustrated woman with an idea"/>
					</ImgWrapper>
				</BannerInner>
			</Container>
		</HomeBannerWrapper>
	)
}

export default HomeBanner;