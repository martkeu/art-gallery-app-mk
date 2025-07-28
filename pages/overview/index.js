import ArtPieceList from "@/components/ArtPieceList";

export default function OverviewPage({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>Overview Page</h1>

      <ArtPieceList
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
