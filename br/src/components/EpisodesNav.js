import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EpisodesNav() {
	useEffect(() => {
		fetchEpisodes();
	}, []);

	const [episodes, setEpisodes] = useState([]);

	const fetchEpisodes = async () => {
		const episodesData = await fetch(
			'https://www.breakingbadapi.com/api/episodes'
		);
		const episodes = await episodesData.json();
		setEpisodes(episodes);
	};

	return (
		<>
			<h3 className='page-title'>Episodes</h3>
			{episodes.map((episode) => (
				<h5 key={episode.episode_id}>
					<Link className='names-list' to={`/episodes/${episode.episode_id}`}>
						{episode.title}
					</Link>
				</h5>
			))}
		</>
	);
}

export default EpisodesNav;
