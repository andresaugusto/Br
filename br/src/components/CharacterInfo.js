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
		console.log(character[0].occupation[2]);
	};

	return (
		<section className='item-info'>
			<h3 className='page-title'>{character.name}</h3>
			<img
				className='character-image'
				src={character.img}
				alt={character.name}
			/>
			<div className='details-div'>
				<ul className='details'>
					<li className='details-parameter'>alias :</li>
					<li className='details-result'>{character.nickname}</li>
					<li className='details-parameter'>birthday :</li>
					<li className='details-result'>{character.birthday}</li>
					<li className='details-parameter'>occupation :</li>
					<li className='details-result'>{character.occupation}</li>
					<li className='details-parameter'>appears in seasons :</li>
					<li className='details-result'>{character.appearance}</li>
					<li className='details-parameter'>status :</li>
					<li className='details-result'>{character.status}</li>
					<li className='details-parameter'>played by :</li>
					<li className='details-result'>{character.portrayed}</li>
				</ul>
			</div>
			<Link className='back-to' to='/characters'>
				<h4>Back to Characters</h4>
			</Link>
		</section>
	);
}

export default CharacterInfo;
