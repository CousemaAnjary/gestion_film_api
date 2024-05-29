import api from "./apiConfig";

// Recuperér la liste des films
export const getFilms = async () => {
  try {
    const response = await api.get("/films");
    return response.data.films;

  } catch (error) {
    console.error("Error fetching films:", error);
    throw error;
  }
};
