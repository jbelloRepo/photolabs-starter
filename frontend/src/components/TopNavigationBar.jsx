import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const handleTopicClick = (topicId) => {
    if (props.onTopicClick) {
      props.onTopicClick(topicId);
    }
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} onTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
