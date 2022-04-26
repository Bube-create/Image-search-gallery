import Search from "./components/Search";
import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import styled from "styled-components";
function App() {
	const [searchResults, setSearchResults] = useState([]);
	const API_key = process.env.REACT_APP_UNSPLASH_API_KEY;

	useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random?client_id=${API_key}&count=10`
		)
			.then((res) => res.json())
			.then((res) => {
				setSearchResults([...res]);
			});
	}, [API_key]);

	return (
		<Container>
			<h1>Image Search Gallery</h1>
			<Search setSearchResults={setSearchResults} />
			{searchResults.length ? (
				<Display searchResults={searchResults} />
			) : (
				<h3>No results found</h3>
			)}
		</Container>
	);
}

export default App;

const Container = styled.div`
	h1,
	h3 {
		text-align: center;
		margin-top: 16px;
	}

	max-width: 1200px;
	padding: 0 32px;
	margin: 0 auto;
`;
