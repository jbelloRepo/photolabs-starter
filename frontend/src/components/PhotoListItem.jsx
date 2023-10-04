import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavorites } from "./FavoriteContext";
import { useModal } from "./ModalContext";

const PhotoListItem = (props) => {
  const { favorites, setFavorites } = useFavorites();

  const isFavorited = favorites.includes(props.id);

  const toggleFavorite = () => {
    if (isFavorited) {
      setFavorites((prevFavs) =>
        prevFavs.filter((favId) => favId !== props.id)
      );
    } else {
      setFavorites((prevFavs) => [...prevFavs, props.id]);
    }
  };

  const { setIsModalOpen } = useModal();

  return (
    <section
      className="photo-list__item"
      onClick={() => {
        console.log("Photo clicked!");
        setIsModalOpen(true);
      }}
    >
      <div>
        <PhotoFavButton
          photoId={props.id}
          isFavorited={isFavorited}
          onClick={toggleFavorite}
        />
        <img
          className="photo-list__image"
          alt="Item"
          src={props.urls.regular}
        />
      </div>
      <div className="photo-list__user-details">
        <div>
          <img
            className="photo-list__user-profile"
            alt="User Profile"
            src={props.user.profile}
          />
        </div>
        <div className="photo-list__user-info">
          {props.user.username}
          <div className="photo-list__user-location">
            {`${props.location.city}, ${props.location.country}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
