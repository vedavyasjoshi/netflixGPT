import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import openai from "../utils/openai";

const useGptMovieSuggestions = (searchText) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";
    let gptResults;
    // gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });
    let gptMovies = gptResults?.choices?.[0].message?.content.split(",");
    if (!gptResults) {
      gptMovies = movies.topRatedMovies.slice(0, 5).map((movie) => movie.title);
    }
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return handleGptSearchClick;
};

export default useGptMovieSuggestions;
