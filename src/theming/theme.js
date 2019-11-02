import burgundy from "./themeImgs/burgundy.JPG";
import dark from "./themeImgs/dark.JPG";
import greenImg from "./themeImgs/green.JPG";
import modernTech from "./themeImgs/modernTech.JPG";
import vintage from "./themeImgs/vintage.JPG";
import yellow from "./themeImgs/yellow.JPG"; 

export const theme = {
	colors: {
		primary: "#1F3137",
		secondary: "#779FAC",
		lightNeutral: "#fafeff",
		bodyText: "#222222"
	}
}

const sunsetTheme = {
	name: "Ron Burgundy",
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

const techTheme = {
	name: "Modern Tech",
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
		thumbnail: modernTech
	}
};

const relaxedGreens = {
	name: "Relaxed Greens",
	colors: {
		background: "#A4B063",
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
		thumbnail: greenImg
	}
};

const vintageVibes = {
	name: "Vintage Vibes",
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

const mellowYellow = {
	name: "Mellow Yellow",
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
		thumbnail: yellow
	}
};

const darkTheme = {
	name: "Dark Theme",
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
		thumbnail: dark
	}
};

export const postThemes = [sunsetTheme, techTheme, relaxedGreens, vintageVibes, mellowYellow, darkTheme]

export default postThemes;