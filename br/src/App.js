import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CharactersNav from './components/CharactersNav';
import CharacterInfo from './components/CharacterInfo';
import EpisodesNav from './components/EpisodesNav';
import EpisodeInfo from './components/EpisodeInfo';
import QuotesNav from './components/QuotesNav';
import QuoteInfo from './components/QuoteInfo';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
// import { Link, Route } from 'react-router-dom';
import './App.css';

// Hou comment: nice job using functional components and hooks throughout your codebase! The code formatting is really clean overall so your code is easy to read and understand.

// Also love that you're using async/await liberally throughout your code!
function App() {
	return (
		// <Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/characters' component={CharactersNav} />
					<Route exact path='/characters/:characterId' component={CharacterInfo} />
					<Route exact path='/episodes' component={EpisodesNav} />
					<Route exact path='/episodes/:episodeId' component={EpisodeInfo} />
					<Route exact path='/quotes' component={QuotesNav} />
					<Route exact path='/quotes/:quoteId' component={QuoteInfo} />
				</Switch>
				<Footer />
			</div>
		// </Router>
	);
}

export default App;
