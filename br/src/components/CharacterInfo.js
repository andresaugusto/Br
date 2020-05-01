/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharacterInfo({ match }) {
	useEffect(() => {
		fetchCharacterInfo();
		console.log(match);
	}, []);

	const [character, setCharacter] = useState([]);

	const fetchCharacterInfo = async () => {
		const fetchCharacterInfo = await fetch(
			`https://www.breakingbadapi.com/api/characters/${match.params.characterId}`
		);
		const character = await fetchCharacterInfo.json();
		setCharacter(character[0]);
		console.log(character);
	};

	return (
		<>
			<h3 className='page-title'>Character Info</h3>
			<img
				className='character-image'
				src={character.img}
				alt={character.name}
			/>
			<h4>{character.name}</h4>
			<ul>
				<li className='character-details'>character id: {character.char_id}</li>
				<li className='character-details'>alias: {character.nickname}</li>
				<li className='character-details'>birthday: {character.birthday}</li>
				<li className='character-details'>
					occupation: {character.occupation}
				</li>
				<li className='character-details'>played by: {character.portrayed}</li>
				<li className='character-details'>
					appears in seasons: {character.appearance}
				</li>
				<li className='character-details'>status: {character.status}</li>
			</ul>
			<Link className='back-to' to='/characters'>
				<h4>Back to Characters</h4>
			</Link>
		</>
	);
}

export default CharacterInfo;
