import React, { Component } from 'react';
import { compressToEncodedURIComponent as compress } from "lz-string";

class Home extends Component {
	constructor(props) {
		super(props);
		this.titleInput = React.createRef();
		this.textInput = React.createRef();
	}

	state = {
		linkToManifesto: null
	}

	getShortUrl = async (longUrl) => {
		const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.REACT_APP_FIREBASE_API}`;
		const data = {
			"dynamicLinkInfo": {
				"dynamicLinkDomain": `${window.location.hostname}/`,
				"link": longUrl
			  },
			  "suffix": {
				"option": "SHORT"
			}
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

	handleSubmit = e => {
		e.preventDefault();
		const title = compress(this.titleInput.current.value);
		const text = compress(this.textInput.current.value);
		const linkToManifesto = `${window.location.hostname}/${title}__${text}`
		this.getShortUrl(`${title}__${text}`);
		this.setState({
			linkToManifesto
		})
	}



	render() {
		const { linkToManifesto } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Title</label>
					<input type="text" ref={this.titleInput}/>
					<br/>
					<label>Text</label>
					<textarea name="" id="" cols="30" rows="10" ref={this.textInput}>
					</textarea>
					<br/>
					<button type="submit">Submit</button>
				</form>
				{linkToManifesto &&
					<div>
						<a href={linkToManifesto}>{linkToManifesto}</a>
					</div>
				}
			</div>
		);
	}
}

export default Home;