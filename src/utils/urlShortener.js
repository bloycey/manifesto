getShortUrl = async (longUrl) => {
	const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.REACT_APP_FIREBASE_API}`;
	const data = {
		// "dynamicLinkInfo": {
		// 	"domainUriPrefix": `${window.location.hostname}/`,
		// 	// "dynamicLinkDomain": `${window.location.hostname}/`,
		// 	"link": longUrl
		//   },
		//   "suffix": {
		// 	"option": "SHORT"
		// }
		"longDynamicLink": `https://test.netlify.com/?link=https://inspiring-volhard-e16b82.netlify.com/${longUrl}`
	};

	try {
		const response = await fetch(url, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const json = await response.json();
		console.log('Success:', JSON.stringify(json));
	} catch (error) {
		console.error('Error:', error);
	}
}