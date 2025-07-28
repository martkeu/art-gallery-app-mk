import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceSpotLight({ piece, favorites, onToggleFavorite }) {
  return (
    <FigureCard>
      <Image
        src={piece.imageSource}
        width={100}
        height={100}
        alt=""
        loading="lazy"
      />

      <figcaption>
        <p>{piece.name}</p> by {piece.artist}
      </figcaption>

      <FavoriteButton
        piece={piece}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </FigureCard>
  );
}

const FigureCard = styled("figure")`
  position: relative;
  border: 20px solid #344056;
  border-radius: 10px;
  width: 80vw;
  max-width: 350px;
  box-shadow: 5px 4px 5px rgba(43, 45, 44, 0.7);

  img {
    /* border-radius: 20px; */
  }

  figcaption {
    background-color: #345644;
    color: #e0e0e0;
    padding: 0.5rem 0.7rem;
    margin-top: -4px; //Hack!

    p {
      font-size: 1.1rem;
      font-weight: bold;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
