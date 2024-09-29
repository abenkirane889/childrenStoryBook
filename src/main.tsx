import React from "react";
import ReactDOM from "react-dom/client";
import { AudioPlayer } from "./components/AudioPlayer";
import "./components/css/styles.css"; // Importer le fichier CSS

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="audio-page-container">
      <div className="audio-player-container">
        <AudioPlayer
          src="audios/YaqoutEtMarjane_ManGhachana.m4a"
          minimal={false}
          width={350}
          trackHeight={75}
          barWidth={1}
          gap={1}
          visualise={true}
          backgroundColor="#FFF8DE"
          barColor="#C1D0B5"
          barPlayedColor="#99A98F"
          skipDuration={2}
          showLoopOption={true}
          showVolumeControl={true}
          onended={() => console.log("ENDED")}
        />
      </div>
      <div className="image-container">
        <img
          src="/images/couverture_YaqoutEtMarjane_ManGhachana.png"
          alt="Background"
        />
      </div>
    </div>
  </React.StrictMode>
);
