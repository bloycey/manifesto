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

const ronBurgundy = {
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
		heading: "Crimson Text",
		body: "Work Sans"
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
		background: "#013914",
		footerStripe: "#A1A1A1",
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
		heading: "Montserrat",
		body: "Montserrat"
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
		body: "Gothic A1"
	},
	images: {
		thumbnail: vintage
	}
};

const blueSparks = {
	name: "Blue Sparks",
	key: "blueSparks",
	colors: {
		background: "#20C1BD",
		footerStripe: "#29DBD7",
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
		heading: "Quicksand",
		body: "Quicksand"
	},
	images: {
		thumbnail: brightBlue
	}
};

const pinkPower = {
	name: "Pink Power",
	key: "pinkPower",
	colors: {
		background: "#DF0054",
		footerStripe: "#FF75A9",
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
		heading: "Lobster",
		body: "Work Sans"
	},
	images: {
		thumbnail: pink
	}
};

export const postThemes = [ronBurgundy, modernTech, vintageVibes, monoTheme, blueSparks, pinkPower]

export default postThemes;