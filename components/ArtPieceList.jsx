import ArtPiece from "@/components/ArtPiece";
import styled from "styled-components";
import Link from "next/link";

export default function ArtPieceList({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <LinkList>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`overview/${piece.slug}`}>
            <ArtPiece
              piece={piece}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          </Link>
        </li>
      ))}
    </LinkList>
  );
}

const LinkList = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
