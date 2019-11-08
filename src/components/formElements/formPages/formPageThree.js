import React, { Fragment } from "react";

import FloatedContent from "../FloatedContent";
import ThemeOptions from "../ThemeOptions";

const FormPageThree = ({ themes, selectedTheme, themeSelectFn }) => {
	return (
		<Fragment>
			<FloatedContent title="Theme">
				<ThemeOptions themes={themes} onClickFn={themeSelectFn} selectedTheme={selectedTheme} />
			</FloatedContent>
		</Fragment>
	)
}

export default FormPageThree;