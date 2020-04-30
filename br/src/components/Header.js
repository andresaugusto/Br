import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav>
				<Link className='links' to='/'>
					<h1>Br</h1>
				</Link>
				<ul>
					<Link className='links' to='/characters'>
						<li>Characters</li>
					</Link>
					<Link className='links' to='/episodes'>
						<li>Episodes</li>
					</Link>
					<Link className='links' to='/quotes'>
						<li>Quotes</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}

export default Header;
