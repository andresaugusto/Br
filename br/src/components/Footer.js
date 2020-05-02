import React from 'react';

export default function Footer() {
	return (
		<footer>
			<ul className='sign-profile-link'>
				<li className='sign-profile-link'>
					<a
						className='sign-profile-link'
						href='https://www.linkedin.com/in/andresortizmontalvo/'>
						L I N K E D I N
					</a>
				</li>
				<li className='sign-profile-link'>
					<a
						className='sign-profile-link'
						href='https://github.com/andresaugusto'>
						G I T H U B
					</a>
				</li>
				<li className='sign-profile-link'>
					<a
						className='sign-profile-link'
						href='https://codepen.io/andresaugusto'>
						C O D E P E N
					</a>
				</li>
			</ul>
			<div className='sign-email'>andres.augusto@icloud.com</div>
			{/* <div className='sign-virtual'>
				<img
					className='sign-virtual-image'
					src='src/images/virtual.png'
					alt='virtual.png'
				/>
			</div> */}
			<span className='sign-date'>
				<small>
					20<span className='sign-first-letter'>20</span>
				</small>
			</span>
		</footer>
	);
}
