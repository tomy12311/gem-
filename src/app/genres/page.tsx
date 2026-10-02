import Allgenres from "@/app/_components/Allgenres";
import { MovieCard } from "@/app/_components/MovieCard";
import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";
import CustomPagination from "../_components/CustomPagination";

interface Props {
  searchParams: Promise<{ genres: string; page?: string }>;
}

async function getMovies(genres: string, page: number) {
  const movies = await response(
    `/discover/movie?language=en&with_genres=${genres}&page=${page}`
  );

  return movies;
}

export default async function GenresPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = await searchParams;

  const paramPage = params.page;
  const page = Number(paramPage) || 1;

  const selectedGenres = params.genres;

  const genreData = await response("/genre/movie/list?language=en");
  const genres = genreData.genres || [];

  const moviesData = selectedGenres
    ? await getMovies(selectedGenres, page)
    : null;

  const totalPages = moviesData?.total_pages || 1;
  const movies = moviesData?.results || [];
  const totalMovies = moviesData?.total_results || 0;

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1280px] flex-col gap-8 px-4 sm:mt-10 sm:px-6 md:mt-12 md:px-8 xl:px-0">
      {/* Title */}
      <h2 className="text-2xl font-semibold sm:text-[30px]">
        Search Filter
      </h2>

      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        {/* Genre Filter */}
        <div className="w-full shrink-0 rounded-md lg:w-[360px]">
          <h3 className="text-xl font-medium sm:text-[24px]">
            Genres
          </h3>

          <div className="mt-1 text-sm text-muted-foreground sm:text-base">
            See lists of movies by genre
          </div>

          <div className="my-3 border-b border-[#27272A]" />

          <div className="w-full">
            <Allgenres genreMovies={genres} />
          </div>
        </div>

        {/* Movies */}
        <div className="flex min-w-0 flex-1 flex-col gap-5 sm:gap-8">
          <h4 className="text-lg font-semibold sm:text-[20px]">
            {totalMovies} titles
          </h4>

          {selectedGenres && (
            <>
              {movies.length > 0 ? (
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
                  {movies.map((movie: Movietype) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[200px] items-center justify-center">
                  <p className="text-sm text-muted-foreground sm:text-base">
                    No movies found.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      {selectedGenres && (
        <div className="w-full">
          <CustomPagination
            page={page}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
}