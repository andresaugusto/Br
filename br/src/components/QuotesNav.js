import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuotesNav() {
	useEffect(() => {
		fetchQuotes();
	}, []);

	const [quotes, setQuotes] = useState([]);

	const fetchQuotes = async () => {
		const quotesData = await fetch(
			'https://www.breakingbadapi.com/api/quotes'
		);
		const quotes = await quotesData.json();
		console.log(quotes);
		setQuotes(quotes);
	};

	return (
		<>
			<h3 className='page-title'>Quotes</h3>
			{quotes.map((quote) => (
				<h4 key={quote.char_id}>
					<Link className='names-list' to={`/quotes/${quote.char_id}`}>
						{quote.name}
					</Link>
				</h4>
			))}
		</>
	);
}

export default QuotesNav;
