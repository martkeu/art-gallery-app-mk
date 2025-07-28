import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtDetails({ artPieces, piece, favorites, onToggleFavorite }) {
  const router = useRouter();

  const { slug: artPieceSlug } = router.query;

  const artPieceData = artPieces.find((piece) => piece.slug === artPieceSlug);
  //console.dir(artPieceData);

  return (
    <>
      {artPieceData ? (
        <ArtPieceDetails
          artPieceData={artPieceData}
          piece={artPieceData}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ) : null}
    </>
  );
}
