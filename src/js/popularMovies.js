import { movieId } from "./genres.js";
import { fetchTrends } from "./fetchDetails.js";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const popularContainer = document.querySelector(".popularContainer");

/// POPULAR MOVIES

fetchTrends().then((data) => {
  popularMovies(data.results);
});

const popularMovies = function (movies) {
  const movie = movies
    .map((movie) => {
      if (
        movie.title !== undefined &&
        movie.title !== "" &&
        movie.release_date !== null
      )
        return `
      <div
      class="
        relative
        rounded-md
        flex
        justify-center
        flex-col
        items-center
        shadow-sm
        overflow-hidden
        filter
        hover:drop-shadow-lg
        transform
        hover:scale-105
        hover:z-50
        duration-200
      "
    >
      <img
        src="${IMAGE_URL}${movie.poster_path}"
        title=""
        class="rounded-md overflow-hidden"
      />

      <div
        class="
          absolute
          opacity-0
          hover:opacity-30
          rounded-md
          bg-gray-800
          duration-300
          z-20
          inset-0
        "
      ></div>

      <div class="
      absolute
      opacity-0
      hover:opacity-100
      duration-300
          z-50
          inset-0
          flex
          flex-col
          justify-end
          transform
          scale-90
          hover:scale-100
          hover:cursor-pointer
          bg-gray-900 bg-opacity-80
          overflow-hidden
          px-3

      "
     
      >
      <p class="text-white text-1xl font-bold ">
        ${movie.title} (${movie.release_date.slice(0, -6)})
      </p>
      <p class="text-purple-400 text-xs  font-semibold pb-5">
        ${movieId(movie.genre_ids)}
      </p>
        <p class="text-gray-300 text-sm  mb-5 line-clamp-5 ">${
          movie.overview
        }</p>
      </div>
    </div>

    `;
    })
    .join("");

  popularContainer.insertAdjacentHTML("beforeend", movie);
};
