import React from "react";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  // Extracting photo details from props
  const { urls, user, location } = props.photo;

  // Extracting similar photos and converting them to an array
  const similarPhotos = props.similarPhotos;
  const similarPhotosArray = Object.values(similarPhotos);

  // Checking if the current photo is in favorites
  const isFavorite =
    props.favorites && props.favorites.includes(props.photo.id);

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button
        className="photo-details-modal__close-button"
        onClick={props.closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <section className="photo-details-modal__images">
        {/* Favorite button */}
        <PhotoFavButton
          photoId={props.photo.id}
          isFavorite={isFavorite}
          toggleFavorite={props.toggleFavorite}
        />

        {/* Display enlarged image */}
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt="enlarged image"
        />

        <div className="photo-details-modal__photographer-details">
          {/* Display photographer details */}
          <img
            className="photo-list__user-profile"
            src={user.profile}
            alt="photographer profile"
          />
          <div className="photo-list__user-info">
            {user.name}
            <div className="photo-list__user-location">
              {`${location.city}, ${location.country}`}
            </div>
          </div>
        </div>

        {/* Header for similar photos */}
        <div className="photo-details-modal__header">Similar photos</div>

        {/* Display list of similar photos */}
        <div>
          <PhotoList
            favorites={props.favorites}
            toggleFavorite={props.toggleFavorite}
            showModal={props.showModal}
            photos={similarPhotosArray}
          />
        </div>
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
