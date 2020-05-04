import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<nav>
				<Link className='links' to='/'>
					<h1>Br</h1>
				</Link>
				<ul>
					<li>
						<Link className='links' to='/characters'>
							Characters
						</Link>
					</li>
					<li>
						<Link className='links' to='/episodes'>
							Episodes
						</Link>
					</li>
					<li>
						<Link className='links' to='/quotes'>
							Quotes
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
