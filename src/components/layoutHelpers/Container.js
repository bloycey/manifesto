import styled from '@emotion/styled';

import React from 'react'

const ResponsiveContainer = styled.div`
	
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	
	@media (min-width: 768px){
		width: 750px;
	}

	@media(min-width: 992px){
		width: 970px;
	}
`

const Container = ({ children }) => {
	return (
		<ResponsiveContainer>
			{ children }
		</ResponsiveContainer>
	)
}

export default Container;