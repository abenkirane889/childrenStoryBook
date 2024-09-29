import React from "react";
import { useParams } from "react-router-dom";
import { AudioPlayer } from "./AudioPlayer";
import "./css/styles.css"; // Importer le fichier CSS

const AudioPlayerPage: React.FC = () => {
  // Récupérer les paramètres depuis l'URL
  const { audioName, language } = useParams<{
    audioName: string;
    language: string;
  }>();

  // Construire le chemin de l'audio en fonction du nom et de la langue
  const audioSrc = `/audios/${audioName}/${language}/${audioName}_${language}.m4a`;

  // Construire le chemin de l'image (pas de langue dans ce cas)
  const imageSrc = `/images/${audioName}/couverture_${audioName}.png`;

  return (
    <div className="audio-page-container">
      <div className="audio-player-container">
        <AudioPlayer
          src={audioSrc}
          minimal={false}
          // eslint-disable-next-line prettier/prettier
          width={350} // S'adapte à la largeur de l'écran
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
          onended={() => console.log("Lecture terminée")}
        />
      </div>
      <div className="image-container">
        <img
          src={imageSrc}
          alt={`Couverture de ${audioName}`}
          className="audio-image" // Classe CSS pour le responsive
        />
      </div>
    </div>
  );
};

export default AudioPlayerPage;
