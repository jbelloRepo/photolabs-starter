import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
  // Props passed to HomeRoute component
  topics,
  isFavPhotoExist,
  photos,
  favorites,
  toggleFavorite,
  showModal,
  fetchPhotosByTopic,
}) => {
  // Function to handle topic clicks
  const handleTopicClick = (topicId) => {
    // Call the fetchPhotosByTopic function when a topic is clicked
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="home-route">
      {/* Render the TopNavigation component */}
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        onTopicClick={handleTopicClick}
      />

      {/* Render the PhotoList component */}
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        showModal={showModal}
      />
    </div>
  );
};

export default HomeRoute;
