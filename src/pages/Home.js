import React from 'react';

import CreateBlog from "../components/CreateBlog";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
	return (
		<div>
			<HomeBanner />
			<CreateBlog />
		</div>
	)
}

export default Home;
