import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE;
export const WATCHLIST_API = `${API_BASE}/watchlist`;

export const addToWatchlist = async (watchlistId, ticker) => {
  const response = await request.put(
    `${WATCHLIST_API}/add-to-watchlist/${watchlistId}`,
    {
      ticker,
    }
  );
  return response.data;
};
