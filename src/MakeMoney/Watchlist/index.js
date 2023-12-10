import { useSelector } from "react-redux";
import "./index.css";
import { useEffect, useState } from "react";
import DisplayWatchlist from "./displayWatchlist";
import * as client from "./client";

function Watchlist() {
  const account = useSelector((state) => state.accountReducer.account);
  const [errorMessage, setErrorMessage] = useState("");
  const [publicWatchlist, setPublicWatchlist] = useState(null);
  const [privateWatchlist, setPrivateWatchlist] = useState(null);

  const fetchWatchlists = async () => {
    try {
      if (account) {
        setPublicWatchlist(
          await client.findWatchlistById(account.publicWatchlist)
        );
        setPrivateWatchlist(
          await client.findWatchlistById(account.privateWatchlist)
        );
      } else {
        throw new Error("No Account found. Please either sign in or sign up.");
      }
    } catch (error) {
      setErrorMessage(error.Message);
    }
  };

  useEffect(() => {
    fetchWatchlists();
  }, [account]);

  return (
    <div className="content">
      <div className="container-fluid">
        <h4>My WatchList</h4>
        <div className="row">
          {!account && (
            <div>
              Please go to account page and sign in or sign up to view your
              watchlist!
            </div>
          )}
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
          {publicWatchlist && (
            <div className="col-6">
              <h2>Public Watchlist</h2>
              <DisplayWatchlist watchlist={publicWatchlist} canEdit={true} />
            </div>
          )}
          {privateWatchlist && (
            <div className="col-6">
              <h2>Private Watchlist</h2>
              <DisplayWatchlist watchlist={privateWatchlist} canEdit={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Watchlist;
