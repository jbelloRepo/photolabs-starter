import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const { state, toggleFavorite, showModal, closeModal, fetchPhotosByTopic } =
    useApplicationData();

  const { favorites, modal, topicData, photoData } = state;
  const selectedPhotoId = modal;
  const selectedPhoto = photoData.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={favorites.length > 0}
        showModal={showModal}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {modal && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={selectedPhoto.similar_photos}
          closeModal={closeModal}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          isFavPhotoExist={favorites.length > 0}
        />
      )}
    </div>
  );
};

export default App;
