import axios from "axios";

const request = axios.create({
	withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE;
export const WATCHLIST_API = `${API_BASE}/watchlist`;
export const deleteFromWatchlist = async (watchlistId, ticker) => {
	const response = await request.put(`${WATCHLIST_API}/delete-from-watchlist`);
	return response.data;
};
