/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuoteInfo({ match }) {
	useEffect(() => {
		fetchQuoteInfo();
		console.log(match);
	}, []);

	const [quote, setQuote] = useState([]);

	const fetchQuoteInfo = async () => {
		const fetchQuoteInfo = await fetch(
			`https://www.breakingbadapi.com/api/quotes/${match.params.quoteId}`
		);
		const quote = await fetchQuoteInfo.json();
		setQuote(quote[0]);
		console.log(quote);
		console.log(quote[0].author);
	};

	return (
		<section className='item-info'>
			<h3 className='quote-page-title'>
				<i>" {quote.quote} "</i>
			</h3>
			<div className='quote-details-div'>
				<ul className='details'>
					<li className='quote-details-result'>- {quote.author}</li>
				</ul>
			</div>
			<Link to='/quotes'>
				<h4 className='back-to'>Back to Quotes</h4>
			</Link>
		</section>
	);
}

export default QuoteInfo;
