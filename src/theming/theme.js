import burgundy from "./themeImgs/burgundy.jpg";
import tech from "./themeImgs/tech.jpg";
import vintage from "./themeImgs/vintage.jpg";
import mono from "./themeImgs/mono.jpg";
import brightBlue from "./themeImgs/brightBlue.jpg";
import pink from "./themeImgs/pink.jpg";

export const theme = {
	colors: {
		primary: "#1F3137",
		secondary: "#779FAC",
		lightNeutral: "#fafeff",
		bodyText: "#222222"
	}
}

const robBurgundy = {
	name: "Ron Burgundy",
	key: "ronBurgundy",
	colors: {
		background: "#5D3137",
		footerStripe: "#7E4950",
		heading: "#ffffff",
		text: "#ffffff"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Arvo",
		body: "Lato"
	},
	images: {
		thumbnail: burgundy
	}
};

const modernTech = {
	name: "Modern Tech",
	key: "modernTech",
	colors: {
		background: "#1F3137",
		footerStripe: "#779FAC",
		heading: "#ffffff",
		text: "#ffffff"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Merriweather",
		body: "Muli"
	},
	images: {
		thumbnail: tech
	}
};

const monoTheme = {
	name: "Mono Theme",
	key: "monoTheme",
	colors: {
		background: "#A0B04A",
		footerStripe: "#C1CC87",
		heading: "#ffffff",
		text: "#ffffff"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Roboto Condensed",
		body: "Cabin"
	},
	images: {
		thumbnail: mono
	}
};

const vintageVibes = {
	name: "Vintage Vibes",
	key: "vintageVibes",
	colors: {
		background: "#FCE9DB",
		footerStripe: "#013914",
		heading: "#013914",
		text: "#013914"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Playfair Display",
		body: "Lato"
	},
	images: {
		thumbnail: vintage
	}
};

const blueSparks = {
	name: "Blue Sparks",
	key: "blueSparks",
	colors: {
		background: "#fae16c",
		footerStripe: "#001d2e",
		heading: "#001d2e",
		text: "#001d2e"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Merriweather",
		body: "Muli"
	},
	images: {
		thumbnail: brightBlue
	}
};

const pinkPower = {
	name: "Pink Power",
	key: "pinkPower",
	colors: {
		background: "#151717",
		footerStripe: "#628288",
		heading: "#ffffff",
		text: "#b5b5b5"
	},
	sizes: {
		heading: "48px",
		body: "20px",
		bodyLineHeight: "1.6",
		headingLineHeight: "1.4"
	},
	fonts: {
		heading: "Oswald",
		body: "Muli"
	},
	images: {
		thumbnail: pink
	}
};

export const postThemes = [robBurgundy, modernTech, vintageVibes, monoTheme, blueSparks, pinkPower]

export default postThemes;