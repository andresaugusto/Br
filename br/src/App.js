import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CharactersNav from './components/CharactersNav';
import EpisodesNav from './components/EpisodesNav';
import QuotesNav from './components/QuotesNav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Route path='/' exact component={Home} />
				<Route path='/characters' exact component={CharactersNav} />
				<Route path='/episodes' exact component={EpisodesNav} />
				<Route path='/quotes' exact component={QuotesNav} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
