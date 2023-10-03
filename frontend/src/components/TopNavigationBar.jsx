import React from 'react';
import FavBadge from './FavBadge';
// If you have a TopicList component or similar, import it:
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {
      <TopicList /> }
      <FavBadge isFavPhotoExist={true} />  {/* Assuming you have favorites. Adjust the prop as needed. */}
    </div>
  );
}

export default TopNavigation;
