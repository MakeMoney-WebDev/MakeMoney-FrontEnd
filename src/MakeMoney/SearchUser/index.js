import { FaSearch } from "react-icons/fa";
import DisplayWatchlist from "../Watchlist/displayWatchlist";
import { findWatchlistById } from "../Watchlist/client";
import { useState, useEffect } from "react";
import { findUserByUsername } from "../Account/client";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setAccount, updateAccount } from "./searchReducer";
function SearchUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const account = useSelector((state) => state.accountReducer.account);
  const dispatch = useDispatch();
  const fetchAccount = async () => {
    try {
      const account = await client.account();
      console.log("Account:", account.role);
      dispatch(setAccount(account));
    } catch (error) {
      console.log("Not logged in");
    }
  };
  const handleSearch = async () => {
    try {
      const searchData = await findUserByUsername(searchTerm);
      console.log("Search Data:", searchData);
      setSearchedUser(searchData);
    } catch (error) {
      console.log("Error occurred:", error);
      setErrorMessage(error.response.data.message);
      setSearchedUser(null);
    }
    fetchWatchlists();
  };
  const [publicWatchlist, setPublicWatchlist] = useState(null);
  const [privateWatchlist, setPrivateWatchlist] = useState(null);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchWatchlists = async () => {
    try {
      if (searchedUser) {
        setPublicWatchlist(
          await findWatchlistById(searchedUser.publicWatchlist)
        );
        setPrivateWatchlist(
          await findWatchlistById(searchedUser.privateWatchlist)
        );
        console.log("found watchlist");
        console.log(searchedUser.publicWatchlist);
        console.log(searchedUser.privateWatchlist);
      }
      console.log("cannot find search data");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchWatchlists();
    fetchAccount();
  }, [searchedUser]);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="infocard">
          <div>
            <input
              type="text"
              placeholder="Search for a User"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="btn btn-light ms-2" onClick={handleSearch}>
              <FaSearch className="search-icon" />
            </button>
            {searchedUser && (
              <div>
                <h4>Here are results for {searchedUser.username}</h4>
                <br />
                <p>Name: {searchedUser.firstName}</p>
                <p>Username: {searchedUser.username}</p>
                <div className="row">
                  {publicWatchlist && (
                    <div className="col-6">
                      <h2>Public Watchlist</h2>
                      <DisplayWatchlist watchlist={publicWatchlist} />
                    </div>
                  )}
                  {privateWatchlist && account.role === "admin" && (
                    <div className="col-6">
                      <h2>Private Watchlist</h2>
                      <DisplayWatchlist watchlist={privateWatchlist} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchUser;
