import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <section className="photo-list__item">
      <div>
        <PhotoFavButton />
        <img className="photo-list__image" src={props.imageSource} />
      </div>
      <div className="photo-list__user-details">
        <div>
          <img className="photo-list__user-profile" src={props.profile} />
        </div>
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">
            {`${props.location.city}, ${props.location.country}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
