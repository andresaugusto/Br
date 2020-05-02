import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharactersNav() {
	useEffect(() => {
		fetchCharacters();
	}, []);

	const [characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const charactersData = await fetch(
			'https://www.breakingbadapi.com/api/characters'
		);
		const characters = await charactersData.json();
		console.log(characters);
		setCharacters(characters);
	};

	return (
		<>
			<h3 className='page-title'>Characters</h3>
			{characters.map((character) => (
				<h5 key={character.char_id}>
					<Link className='names-list' to={`/characters/${character.char_id}`}>
						{character.name}
					</Link>
				</h5>
			))}
		</>
	);
}

export default CharactersNav;
