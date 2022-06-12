import { MovieCardData } from "./MovieCard.types";

const movieCard1: MovieCardData = {
  title: "An American Tail: Fievel Goes West",
  genres: ["Comedy", "Western"],
  actors: ["Fievel Mousekewitz", "Tanya MouseKewitz"],
  serie: true,
  releaseDate: "1991-11-17",
};

const movieCard2: MovieCardData = {
  title: "The Notebook",
  genres: ["Drama", "Romance"],
  actors: ["Ryan Gosling", "Rachel McAdams"],
  serie: false,
  releaseDate: "2004-06-25",
};

export const mockMovieCard = {
  movieCard1,
  movieCard2,
};
