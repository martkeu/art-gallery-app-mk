import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiece({ piece, favorites, onToggleFavorite }) {
  return (
    <FigureCard>
      <Image src={piece.imageSource} width={200} height={200} alt="" />

      <figcaption>
        <p>{piece.name}</p> by {piece.artist} <span>({piece.year})</span>
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
  border: 1px solid green;
  border-radius: 7px;
  width: 60vw;
  max-width: 350px;

  figcaption {
    background-color: #344056;
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
