import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          {...photo}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          showModal={props.showModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
