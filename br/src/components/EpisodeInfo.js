/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EpisodeInfo({ match }) {
	useEffect(() => {
		fetchEpisodeInfo();
		// console.log(match);
	}, []);

	const [episode, setEpisode] = useState([]);

	const fetchEpisodeInfo = async () => {
		const fetchEpisodeInfo = await fetch(
			`https://www.breakingbadapi.com/api/episodes/${match.params.episodeId}`
		);
		const episode = await fetchEpisodeInfo.json();
		setEpisode(episode[0]);
		console.log(episode);
		console.log(episode[0].characters[3]);
	};

	return (
		<section className='item-info'>
			<h3 className='page-title'>{episode.title}</h3>
			<div className='episode-details-div'>
				<ul className='details'>
					<li className='details-parameter'>season :</li>
					<li className='details-result'>{episode.season}</li>
					<li className='details-parameter'>episode :</li>
					<li className='details-result'>{episode.episode}</li>
					<li className='details-parameter'>characters :</li>
					<li className='details-result'>{episode.characters}</li>
					<li className='details-parameter'>air date :</li>
					<li className='details-result'>{episode.air_date}</li>
				</ul>
			</div>
			<Link to='/episodes'>
				<h4 className='back-to'>Back to Episodes</h4>
			</Link>
		</section>
	);
}

export default EpisodeInfo;
