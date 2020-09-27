import React, { Component } from "react";

export class SearchBar extends Component {
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
	state = { term: "" };

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="">Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
