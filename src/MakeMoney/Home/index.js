import "./index.css";
import React from "react";
import { useLocation } from "react-router-dom";
function Home() {
	const location = useLocation();
	const searchData = location.state?.searchData || null;
	let OpenPrice = "";
	let ClosePrice = "";
	let HighPrice = "";
	let LowPrice = "";
	let Ticker = "";
	let Percent = "";
	let PercentChange = 0;
	const calculatePercentageChange = () => {
		if (searchData && searchData.open !== undefined && searchData.close !== undefined) {
			const openPrice = searchData.open;
			const closePrice = searchData.close;

			if (openPrice !== 0) {
				PercentChange = ((closePrice - openPrice) / openPrice) * 100;
			}
		}
		return PercentChange;
	};

	if (searchData) {
		console.log("Search Data in Home:", searchData);
		Ticker = `The current stock you are viewing is ${searchData.ticker}`;
		OpenPrice = `The open price of the stock was ${searchData.open}`;
		ClosePrice = `The close price of the stock was ${searchData.close}`;
		HighPrice = `The highest recorded price of the stock was ${searchData.high}`;
		LowPrice = `The lowest recorded price of the stock was ${searchData.low}`;
		Percent = `The percent change today is measured at ${calculatePercentageChange}`;

		const tickerStyle = {
			color: PercentChange > 0 ? "green" : PercentChange < 0 ? "red" : "black",
		};

		Ticker = (
			<span style={tickerStyle}>The current stock you are viewing is {searchData.ticker}</span>
		);
	} else {
		console.log("Search Data not found in Home");
		Ticker = `The current stock you are viewing is none`;
		OpenPrice = "The open price of the stock was 0";
		ClosePrice = "The close price of the stock was 0";
		HighPrice = "The highest recorded price of the stock was 0";
		LowPrice = "The lowest recorded price of the stock was 0";
		Percent = "The Percentage change was 0";
	}

	return (
		<div className="content">
			<div className="container-fluid">
				<div>
					<h4>Home</h4>
				</div>
				<div>
					{Ticker} <br />
					{OpenPrice} <br />
					{ClosePrice} <br />
					{HighPrice} <br />
					{LowPrice} <br />
					{Percent}
					<br />
				</div>
			</div>
		</div>
	);
}
export default Home;
