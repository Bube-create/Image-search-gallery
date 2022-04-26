import React, { useState } from "react";

import styled from "styled-components";
const Search = ({ setSearchResults }) => {
	const [searchValue, setSearchValue] = useState("");
	const API_key = process.env.REACT_APP_UNSPLASH_API_KEY;

	function handleInput(event) {
		setSearchValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSearchValue("");
		fetch(
			`https://api.unsplash.com/search/photos?client_id=${API_key}&page=1&query=${searchValue}&orientation=portrait`
		)
			.then((res) => res.json())
			.then((res) => setSearchResults([...res.results]))
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<StyledSearchForm onSubmit={handleSubmit}>
			<label htmlFor="search"></label>
			<input
				value={searchValue}
				onChange={handleInput}
				id="search"
				placeholder="search..."
			/>
		</StyledSearchForm>
	);
};

export default Search;

const StyledSearchForm = styled.form`
	margin: 32px 0;
	input {
		display: block;
		width: 60%;
		font-size: 1.2rem;
		margin: 0 auto;
		border-radius: 32px;
		padding: 8px 32px;
		border: 1px solid grey;
	}
`;
