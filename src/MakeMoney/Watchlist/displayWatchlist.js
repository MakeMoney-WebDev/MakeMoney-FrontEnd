import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as client from "./client";
import { useState } from "react";

const DisplayWatchlist = ({ watchlist }, canEdit) => {
  const [list, setList] = useState(watchlist.listOfTickers);
  const deleteFromWatchlist = async (item) => {
    await client.deleteFromWatchlist(watchlist._id, item);
    setList(list.filter((i) => i !== item));
  };

  return (
    <div className="list-group pt-2">
      {list.map((item, index) => (
        <div>
          <div className="list-group-item d-flex justify-content-between align-items-center list-stock">
            {item}
            {canEdit && (
              <div className="mb-">
                <FaTrash onClick={() => deleteFromWatchlist(item)} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DisplayWatchlist;
