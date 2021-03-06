import { SearchMovieRequest, SortOrder } from "./SearchMovieRequest";
import { GenreResponse, SearchMovieResponse } from "./SearchMovieResponse";

const allMovies: SearchMovieResponse = [
  {
    id: 163979287265942016,
    title: "An American Tail: Fievel Goes West",
    genre: [
      {
        id: 3,
        title: "Comedy",
      },
      {
        id: 8,
        title: "Western",
      },
    ],
    actors: [
      {
        id: 163978496991957504,
        name: "Fievel Mousekewitz",
      },
      {
        id: 163978647315813376,
        name: "Tanya MouseKewitz",
      },
    ],
    is_series: true,
    release_date: "1991-11-17T00:00:00.000000Z",
  },
  {
    id: 163982121944357888,
    title: "The Notebook",
    genre: [
      {
        id: 2,
        title: "Drama",
      },
      {
        id: 6,
        title: "Romance",
      },
    ],
    actors: [
      {
        id: 163982182073900544,
        name: "Ryan Gosling",
      },
      {
        id: 163982199253770240,
        name: "Rachel McAdams",
      },
    ],
    is_series: false,
    release_date: "2004-06-25T00:00:00.000000Z",
  },
];

const searchMovieApiMock = {
  getAllGenres(): Promise<GenreResponse> {
    return Promise.resolve(allMovies.flatMap((movie) => movie.genre));
  },
  searchMovies(request: SearchMovieRequest): Promise<SearchMovieResponse> {
    console.log(JSON.stringify(request, null, 2));

    let response: SearchMovieResponse = allMovies.map((movie) => ({
      ...movie,
    }));

    if (request.filters?.length) {
      response = response.slice(0, 1);
    }

    if (request.sort?.order === SortOrder.DESC) {
      response.reverse();
    }

    return Promise.resolve(response);
  },
};

export default searchMovieApiMock;
