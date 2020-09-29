import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");

	// const onInputChange = event => {
	// 	setTerm(event.target.value)
	// };

	const onSubmit = event => {
		event.preventDefault();
		//TODO callback
		onFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} action="" className="ui form">
				<div className="field">
					<label htmlFor="">Video Search</label>
					<input
						type="text"
						value={term}
						onChange={e => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
