import { FaSearch } from "react-icons/fa";
import DisplayWatchlist from "../Watchlist/displayWatchlist";
import { findWatchlistById } from "../Watchlist/client";
import { useState, useEffect } from "react";
import { findUserByUsername } from "../Account/client";
function SearchUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
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
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchWatchlists = async () => {
    try {
      if (searchedUser) {
        setPublicWatchlist(
          await findWatchlistById(searchedUser.publicWatchlist)
        );
        console.log("found watchlist");
        console.log(searchedUser.publicWatchlist);
      }
      console.log("cannot find search data");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchWatchlists();
  }, [searchedUser]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a User"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="btn btn-light" onClick={handleSearch}>
        <FaSearch className="search-icon" />
      </button>
      {searchedUser && (
        <div>
          <h4>Here are results for {searchedUser.username}</h4>
          <br />
          <p>Name: {searchedUser.firstName}</p>
          <p>Username: {searchedUser.username}</p>
          {publicWatchlist && (
            <div className="col-6">
              <h2>Public Watchlist</h2>
              <DisplayWatchlist watchlist={publicWatchlist} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default SearchUser;
