import React from "react";
import styled from "styled-components";

const Display = ({ searchResults }) => {
	return (
		<MainGrid>
			{searchResults.map((item) => (
				<ImageCard key={item.id}>
					<img src={item.urls.small} alt="" />
				</ImageCard>
			))}
		</MainGrid>
	);
};

export default Display;

const MainGrid = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	justify-items: center;
	gap: 16px;
`;

const ImageCard = styled.div`
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
`;
