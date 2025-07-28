import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

// [
//   {
//     "slug": "orange-red-and-green",
//     "artist": "Steve Johnson",
//     "name": "Orange Red and Green Abstract Painting",
//     "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//     "year": "2018",
//     "genre": "Abstract Painting",
//     "colors": [
//       "#0f5855",
//       "#e6ba15",
//       "#b42011",
//       "#cec4c6",
//       "#d5561f"
//     ],
//     "dimensions": {
//       "height": 2432,
//       "width": 1920,
//       "type": "jpg"
//     }
//    },
//    ...
// ]

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  const [favorites, setFavorites] = useState([]);
  console.log("Favorites: ", favorites);

  /*-----------------------------------------------------------------------------mk--
   | Loading API-Data
   |----------------------------------------------------------------------------------
   | 
   */
  const Art_URL = "https://example-apis.vercel.app/api/art";

  async function loadArtPieces() {
    try {
      const response = await fetch(Art_URL);
      const data = await response.json();
      console.log(data);

      setArtPieces(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadArtPieces();
  }, []);

  /*-----------------------------------------------------------------------------mk--
   | Mark favorite ArtPieces
   |----------------------------------------------------------------------------------
   | 
   */
  function handleToggleFavorite(slug) {
    if (favorites.includes(slug)) {
      return setFavorites(favorites.filter((favorite) => favorite !== slug));
    } else {
      return setFavorites([...favorites, slug]);
    }
  }

  /*-----------------------------------------------------------------------------mk--
   | Check favorite ArtPieces
   |----------------------------------------------------------------------------------
   | 
   */
  function isFavoriteArtPiece(piece) {
    if (favorites.includes(piece.slug)) {
      return true;
    }

    return false;
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite} 
        isFavorite={isFavoriteArtPiece}
      />
    </Layout>
  );
}
