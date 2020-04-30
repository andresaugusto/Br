import React from 'react';
import Header from './components/Header';
import HomeSearch from './components/HomeSearch';
import MainCharacterSelection from './components/MainCharacterSelection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<HomeSearch />
			<MainCharacterSelection />
			<Footer />
		</div>
	);
}

export default App;
