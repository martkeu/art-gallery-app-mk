import ArtPieceList from "@/components/ArtPieceList";

export default function FavoritePage({
  artPieces,
  isFavorite,
  favorites,
  onToggleFavorite,
}) {
  const favoriteArtPieces = artPieces.filter((piece) => isFavorite(piece));

  return (
    <>
      <h1>Favorite Page</h1>

      {favoriteArtPieces.length < 1 ? (
        <h2>No artworks have been favorited yet!</h2>
      ) : (
        <ArtPieceList
          artPieces={favoriteArtPieces}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
