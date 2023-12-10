import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as client from "./client";
import { useState } from "react";

const DisplayWatchlist = ({ watchlist, canEdit = false, onDelete }) => {
  // const [list, setList] = useState(watchlist.listOfTickers);

  return (
    <div className="list-group pt-2">
      {watchlist.listOfTickers.map((item, index) => (
        <div>
          <div className="list-group-item d-flex justify-content-between align-items-center list-stock">
            {item}
            {canEdit && (
              <div className="mb-">
                <FaTrash onClick={() => onDelete(watchlist._id, item)} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DisplayWatchlist;
