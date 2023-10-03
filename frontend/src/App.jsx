import React from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from 'routes/HomeRoute';

const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
