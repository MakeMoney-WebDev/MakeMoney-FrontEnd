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
        const publicWL = await client.findWatchlistById(
          account.publicWatchlist
        );
        const privateWL = await client.findWatchlistById(
          account.privateWatchlist
        );
        console.log("public", publicWL);
        console.log("private", privateWL);

        setPublicWatchlist(publicWL);
        setPrivateWatchlist(privateWL);
      } else {
        throw new Error("No Account found. Please either sign in or sign up.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchWatchlists();
  }, [account]);

  const deleteFromWatchlist = async (id, item) => {
    await client.deleteFromWatchlist(id, item);
    fetchWatchlists();
  };

  return (
    <div className="content">
      <div className="container-fluid">
        <h4>My WatchList</h4>
        <div className="infocard">
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
                <DisplayWatchlist
                  watchlist={publicWatchlist}
                  canEdit
                  onDelete={deleteFromWatchlist}
                />
              </div>
            )}
            {privateWatchlist && (
              <div className="col-6">
                <h2>Private Watchlist</h2>
                <DisplayWatchlist
                  watchlist={privateWatchlist}
                  canEdit
                  onDelete={deleteFromWatchlist}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Watchlist;
