import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { useFavorites } from "./FavoriteContext";

const TopNavigation = ({ topics }) => {
  const { favorites } = useFavorites();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge favoriteCount={favorites.length} />
    </div>
  );
};

export default TopNavigation;
