import "./index.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as client from "./client";
import { useSelector } from "react-redux";

function Home() {
	const location = useLocation();
	const account = useSelector((state) => state.accountReducer.account);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState(location.state?.errorMessage);
	const searchData = location.state?.searchData;
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
				return ((closePrice - openPrice) / openPrice) * 100;
			}
		}
		return 0;
	};

	if (searchData) {
		console.log("Search Data in Home:", searchData);
		PercentChange = calculatePercentageChange();
		const tickerStyle = {
			color: PercentChange > 0 ? "green" : PercentChange < 0 ? "red" : "black",
		};
		Ticker = (
			<span style={tickerStyle}><strong>The current stock you are viewing is {searchData.ticker}</strong></span>
		);
		// Ticker = `The current stock you are viewing is ${searchData.ticker}`;
		OpenPrice = (
			<span>
				The <strong>open price</strong> of the stock was <strong>${searchData.open.toFixed(2)}</strong>
			</span>
		  );
		ClosePrice = (
			<span>
				The <strong>close price</strong> of the stock was <strong>${searchData.close.toFixed(2)}</strong>
			</span>
		  );
		HighPrice = (
			<span>
				The <strong>highest recorded price</strong> of the stock was <strong>${searchData.high.toFixed(2)}</strong>
			</span>
		  );
		LowPrice = (
			<span>
				The <strong>lowest recorded price</strong> of the stock was <strong>${searchData.low.toFixed(2)}</strong>
			</span>
		  );
		Percent = (
			<span>
				The <strong>percent change</strong> is measured at <strong>%{PercentChange.toFixed(2)}</strong>
			</span>
		  );
	} else {
		console.log("Search Data not found in Home");
		Ticker = (
			<span>
				<strong>The current stock you are viewing is none</strong>
			</span>
		  );
		OpenPrice = (
			<span>
				The <strong>open price</strong> of the stock was <strong>0</strong>
			</span>
		  );
		ClosePrice = (
			<span>
				The <strong>close price</strong> of the stock was <strong>0</strong>
			</span>
		  );
		HighPrice = (
			<span>
				The <strong>highest recorded price</strong> of the stock was <strong>0</strong>
			</span>
		  );
		LowPrice = (
			<span>
				The <strong>lowest recorded price</strong> of the stock was <strong>0</strong>
			</span>
		  );
		Percent = (
			<span>
				The <strong>percentage change</strong> is measured at <strong>0</strong>
			</span>
		  );
	}

	const addToPublicWatchlist = async (ticker) => {
		try {
			await client.addToWatchlist(account.publicWatchlist, ticker);
			setSuccessMessage(`Successfully added ${ticker} to the public watchlist!`);
		} catch (error) {
			setErrorMessage(error.response.data.message);
		}
	};

	const addToPrivateWatchlist = async (ticker) => {
		try {
			await client.addToWatchlist(account.privateWatchlist, ticker);
			setSuccessMessage(`Successfully added ${ticker} to the private watchlist!`);
		} catch (error) {
			setErrorMessage(error.response.data.message);
		}
	};

	return (
		<div className="content">
			<div className="container-fluid">
				<div>
					<h4>Home</h4>
				</div>
				{errorMessage && <div className="text-danger">{errorMessage}</div>}
				<div className="infocard">
					<div>
						{Ticker} <br /><br />
						{OpenPrice} <br />
						{ClosePrice} <br />
						{HighPrice} <br />
						{LowPrice} <br />
						{Percent}
						<br />
					</div>
					{account && searchData && (
						<div className="d-flex flex-column">
							<button
								className="btn btn-success my-2"
								onClick={() => addToPublicWatchlist(searchData.ticker)}
							>
								Add to Public Watchlist
							</button>
							<button
								className="btn btn-success"
								onClick={() => addToPrivateWatchlist(searchData.ticker)}
							>
								Add to Private Watchlist
							</button>
							{successMessage && (
								<div className="text-success text-center mt-2">{successMessage}</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
export default Home;
