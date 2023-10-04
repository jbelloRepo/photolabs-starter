import React from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import { FavoriteProvider } from "./components/FavoriteContext";
import HomeRoute from "routes/HomeRoute";
import topics from "./mocks/topics.js";
import photos from "./mocks/photos.js";
import { ModalProvider } from "./components/ModalContext";
import PhotoDetailsModal from "./routes/PhotoDetailsModal.jsx";

const App = () => {
  return (
    <ModalProvider>
      <FavoriteProvider>
        <div className="App">
          <HomeRoute topics={topics} photos={photos} />
          <PhotoDetailsModal />
        </div>
      </FavoriteProvider>
    </ModalProvider>
  );
};

export default App;
