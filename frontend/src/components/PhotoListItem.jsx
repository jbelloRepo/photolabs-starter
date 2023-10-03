import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  return (
    <section className="photo-list__item">
      <div>
        <PhotoFavButton />
        <img className="photo-list__image" alt="Item" src={props.urls.regular} />
      </div>
      <div className="photo-list__user-details">
        <div>
          <img className="photo-list__user-profile" alt="User Profile" src={props.user.profile} />
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
