import React from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import { FavoriteProvider } from "./components/FavoriteContext";
import HomeRoute from "routes/HomeRoute";
import topics from "./mocks/topics.js";
import photos from "./mocks/photos.js";

const App = () => {
  return (
    <FavoriteProvider>
      <div className="App">
        <HomeRoute topics={topics} photos={photos} />
      </div>
    </FavoriteProvider>
  );
};

export default App;
