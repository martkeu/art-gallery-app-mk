import Image from "next/image";
import Star from "@/assets/star.svg";
import ArtPieceSpotLight from "@/components/ArtPieceSpotLight";
import FavoriteButton from "@/components/FavoriteButton";

export default function HomePage({ artPieces, favorites, onToggleFavorite }) {
  
const artPieceRandom = Math.floor(Math.random() * artPieces.length);
  const spotLightArtPiece = artPieces[artPieceRandom];
  console.log("index", spotLightArtPiece);

  return (
    <main>
      <h2>Artist of the week!</h2>

      {spotLightArtPiece ? (
        <ArtPieceSpotLight
              piece={spotLightArtPiece}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
        />
      ) : null}
    </main>
  );
}
