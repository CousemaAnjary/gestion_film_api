import { useEffect, useState } from "react";
import { getFilms } from "../services/filmService";

function FilmList() {
  // state (état, données) de l'application
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  // comportement de l'application
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupération des données des films
        const filmsData = await getFilms();
        // Mise à jour de l'état films avec les données récupérées
        setFilms(filmsData);
      } catch (error) {
        // Gestion des erreurs et mise à jour de l'état d'erreur
        console.error("Failed to fetch films:", error);
      } finally {
        // Mise à jour de l'état de chargement
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // affichage (render)
  return (
    <>
      <h1>Films {films.length}</h1>
    </>
  );
}

export default FilmList;
