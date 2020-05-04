import React from 'react';
import HomeBackground from './HomeBackground';

function Home() {
	// Hou comment: Nested <section> tags here might not be semantically appropriate. Take a read to understand how to use section tags properly: https://stackoverflow.com/questions/7183132/how-to-correctly-use-section-tag-in-html5
	return (
		<section>
			<HomeBackground />
			<section className='home'>
				<h1 className='home-titles'>
					Would you love to learn how to cook meth?
				</h1>
				<p className='home-warnings'>
					<u>Well this is NOT</u> the site for you.
				</p>
				<p className='home-warnings'>
					<u>We would NEVER</u> teach how to cook meth here.
				</p>

				<h1 className='home-titles'>
					But you <u>will</u> find information about the show that made us all
					sympathize with a meth dealer.
				</h1>

				<section className='home-info'>
					<h1>
						<u>About this app</u>
					</h1>
					<h1>
						Powered by Tim Biles' <i>"The Breaking Bad API"</i>, this is a
						portal to information about your favorite characters, episodes, and
						quotes from the show.
					</h1>

					<p>
						As a fair warning, this database contains spoiler data like deaths
						and character appearances in episodes/seasons. If you, for some
						reason, have not finished watching the show yet, as Tim Biles
						introduced: "...Tread Lightly".
					</p>
				</section>
			</section>
		</section>
	);
}

export default Home;
