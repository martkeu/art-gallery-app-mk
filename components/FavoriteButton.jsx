import HeartPlus from "@/assets/heart-plus.svg";
import HeartMinus from "@/assets/heart-minus.svg";
import styled from "styled-components";

export default function FavoriteButton({ piece, favorites, onToggleFavorite }) {
  return (
    <FavButton
      onClick={(e) => {
        e.preventDefault();
        onToggleFavorite(piece.slug);
      }}
      aria-label="favorite"
    >
      {favorites?.includes(piece.slug) ? (
        <HeartPlus style={{ fill: "red" }} />
      ) : (
        <HeartMinus style={{ fill: "gray" }} />
      )}
    </FavButton>
  );
}

const FavButton = styled("button")`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  width: 48px;
  height: 48px;
  background-color: #d80b4fb5;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
`;
