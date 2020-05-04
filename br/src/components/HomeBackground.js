import React, { useState, useEffect } from 'react';

function HomeBackground() {
	useEffect(() => {
		fetchCharacters();
	}, []);

	const [characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const charactersData = await fetch(
			'https://www.breakingbadapi.com/api/characters'
		);
		const characters = await charactersData.json();
		setCharacters(characters);
	};

	return (
		<div className='background-collage'>
			{characters.map((character) => (
				<img
					key={character.char_id}
					className='individual-bg-img'
					src={character.img}
					alt={character.name}
				/>
			))}
		</div>
	);
}

export default HomeBackground;
