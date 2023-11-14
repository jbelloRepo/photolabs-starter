import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const handleTopicClick = (topicId) => {
    if (props.onTopicClick) {
      props.onTopicClick(topicId);
    }
  };
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onTopicClick={() => handleTopicClick(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
