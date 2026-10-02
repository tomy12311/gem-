import { Card } from "@/components/ui/card";
import { MovieCard } from "../_components/MovieCard";
import response from "../_util/response";
import { Movietype } from "../_util/type";
import SearchGenres from "../_components/SearchGenres";
import CustomPagination from "../_components/CustomPagination";

interface Props {
  searchParams: Promise<{
    searchValue: string;
    genres: string;
    page?: string;
  }>;
}

const SearchPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await searchParams;

  const searchValue = params.searchValue || "";

  const selectedGenres = params.genres
    ? params.genres.split(",").map(Number)
    : [];

  const totalPages = 500;
  const page = Number(params.page) || 1;

  const data =
    searchValue.length > 0
      ? await response(
          `/search/movie?query=${searchValue}&language=en-US&page=${page}`
        )
      : { results: [], total_results: 0 };

  const movies: Movietype[] = data.results || [];
  const searchedMovies = data.total_results || 0;

  const filteredMovies =
    selectedGenres.length > 0
      ? movies.filter((movie) =>
          movie.genre_ids.some((genreId) =>
            selectedGenres.includes(genreId)
          )
        )
      : movies;

  const genreData = await response(
    "/genre/movie/list?language=en"
  );

  const genreMovies = genreData.genres || [];

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1280px] flex-col gap-8 px-4 sm:mt-10 sm:px-6 md:mt-12 md:px-8 xl:px-0">
      {/* Title */}
      <h2 className="text-2xl font-semibold sm:text-[30px]">
        Search results
      </h2>

      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        {/* Movies */}
        <div className="flex min-w-0 w-full flex-1 flex-col gap-5 sm:gap-8">
          {selectedGenres.length > 0 ? (
            <h4 className="text-lg font-semibold sm:text-[20px]">
              {filteredMovies.length} results for &#34;{searchValue}&#34;
            </h4>
          ) : (
            <h4 className="text-lg font-semibold sm:text-[20px]">
              {searchedMovies} results for &#34;{searchValue}&#34;
            </h4>
          )}

          {filteredMovies.length > 0 ? (
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
              {filteredMovies.map((movie: Movietype) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[200px] items-center justify-center">
              <p className="text-sm text-muted-foreground sm:text-base">
                No results found.
              </p>
            </div>
          )}
        </div>

        {/* Genre Filter */}
        <Card className="w-full shrink-0 rounded-md border-none bg-transparent shadow-none lg:w-[360px]">
          <h3 className="text-xl font-medium sm:text-[24px]">
            Search by genre
          </h3>

          <div className="mt-1 text-sm text-muted-foreground sm:text-base">
            See lists of movies by genre
          </div>

          <div className="my-3 border-b border-[#27272A]" />

          <div className="w-full">
            <SearchGenres genreMovies={genreMovies} />
          </div>
        </Card>
      </div>

      {/* Pagination */}
      <div className="mt-2 flex w-full justify-center sm:mt-4">
        <CustomPagination
          page={page}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default SearchPage;