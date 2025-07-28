import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

export default function ArtPieceDetails({
  artPieceData,
  piece,
  favorites,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href="/overview">Back To Galery</Link>

      <p>{artPieceData.name}</p>
      <p>{artPieceData.artist}</p>
      <p>{artPieceData.year}</p>
      <p>{artPieceData.genre}</p>

      <FigureCard>
        <Image
          src={artPieceData.imageSource}
          width={artPieceData.dimensions.width}
          height={artPieceData.dimensions.height}
          alt=""
        />

        <FavoriteButton
          piece={piece}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </FigureCard>
    </>
  );
}

// const ImageDetail = styled("img")`
//   width: 30%;
//   height: auto;
// `;

const FigureCard = styled("figure")`
  position: relative;
`;
