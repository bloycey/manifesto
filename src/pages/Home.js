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

	handleSubmit = e => {
		e.preventDefault();
		const title = compress(this.titleInput.current.value);
		const text = compress(this.textInput.current.value);
		const linkToManifesto = `${window.location.hostname}:3000/${title}__${text}`
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