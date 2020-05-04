import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuotesNav() {
	useEffect(() => {
		fetchQuotes();
	}, []);

	const [quotes, setQuotes] = useState([]);

	const fetchQuotes = async () => {
		const quotesData = await fetch('https://www.breakingbadapi.com/api/quotes');
		const quotes = await quotesData.json();
		setQuotes(quotes);
	};

	return (
		<>
			<h3 className='page-title'>Quotes</h3>
			{quotes.map((quote) => (
				<h4 key={quote.quote_id}>
					<Link className='names-list' to={`/quotes/${quote.quote_id}`}>
						<i>"{quote.quote}"</i>
					</Link>
				</h4>
			))}
		</>
	);
}

export default QuotesNav;
