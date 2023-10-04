import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ favoriteCount }) => {
  return (
    <div className="fav-badge">
      <FavIcon selected={favoriteCount > 0} />
      {favoriteCount > 0 && <span className="fav-count">{favoriteCount}</span>}
    </div>
  );
};

export default FavBadge;
