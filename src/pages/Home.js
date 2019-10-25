import React, { Component } from 'react';
import { compressToEncodedURIComponent } from "lz-string";

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
		console.log(this.titleInput.current.value);
		console.log(this.textInput.current.value);
		const title = compressToEncodedURIComponent(this.titleInput.current.value);
		const text = compressToEncodedURIComponent(this.textInput.current.value);
		const linkToManifesto = `${window.location.hostname}:3000/${title}__${text}`
		this.setState({
			linkToManifesto
		})
	}

	render() {
		return (
			<div>
				<p>It's the home page</p>
				<form onSubmit={this.handleSubmit}>
					<label>Title</label>
					<input type="text" ref={this.titleInput}/>
					<label>Text</label>
					<textarea name="" id="" cols="30" rows="10" ref={this.textInput}>
					</textarea>
					<button type="submit">Submit</button>
				</form>
				<div>
					{this.state.linkToManifesto && <div><a href={this.state.linkToManifesto}>{this.state.linkToManifesto}</a></div>}
				</div>
			</div>
		);
	}
}

export default Home;