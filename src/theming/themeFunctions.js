import React from 'react';
import { ThemeProvider } from "emotion-theming";

import { theme } from "./theme";

export const withTheme = (WrappedComponent) => {
	class ThemeHOC extends React.PureComponent {
		render() {
			return (
				<ThemeProvider theme={theme}>
					<WrappedComponent />
				</ThemeProvider>
			)
		}
	}
	return ThemeHOC;
}
