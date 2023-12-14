import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE;
export const USERS_API = `${API_BASE}/users`;

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};
