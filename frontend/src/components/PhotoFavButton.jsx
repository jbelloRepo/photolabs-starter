import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useFavorites } from "./FavoriteContext";

function PhotoFavButton({ photoId }) {
  const { favorites, setFavorites } = useFavorites();
  const isFavorited = favorites.includes(photoId);

  const toggleFavorite = () => {
    if (isFavorited) {
      setFavorites((prevFavs) => prevFavs.filter((favId) => favId !== photoId));
    } else {
      setFavorites((prevFavs) => [...prevFavs, photoId]);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
