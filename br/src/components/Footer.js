import React from 'react';

export default function Footer() {
	return (
		<>
			<ul>
				<li>
					<a
						className='profile-link'
						href='https://www.linkedin.com/in/andresortizmontalvo/'>
						L I N K E D I N
					</a>
				</li>
				<li>
					<a className='profile-link' href='https://github.com/andresaugusto'>
						G I T H U B
					</a>
				</li>
				<li>
					<a className='profile-link' href='https://codepen.io/andresaugusto'>
						C O D E P E N
					</a>
				</li>
			</ul>
			<div className='email'>andres.augusto@icloud.com</div>
			{/* <div className='virtual'>
				<img
					className='virtual-image'
					src='src/images/virtual.png'
					alt='virtual.png'
				/>
			</div> */}
			<a>
				<span className='date'>
					<small>
						20<span className='firstLetter'>20</span>
					</small>
				</span>
			</a>
		</>
	);
}
