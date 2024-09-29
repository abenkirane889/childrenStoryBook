import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioPlayerPage from "./components/AudioPlayerPage"; // Nouveau composant que nous allons créer
import "./components/css/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route avec les paramètres : audioName et language */}
        <Route
          path="/audio/:audioName/:language"
          element={<AudioPlayerPage />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
