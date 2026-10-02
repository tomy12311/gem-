
import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SearchPage = ({ searchValue }: { searchValue: string }) => {
  const [movies, setMovies] = useState<Movietype[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await response(
        `/search/movie?query=${searchValue}&language=en-US&page=1`
      );

      setMovies(data.results);
    };

    fetchMovies();
  }, [searchValue]);

  console.log(searchValue);

  return (
    <div className="w-full">
      {movies?.slice(0, 5).map((movie: Movietype) => (
        <Link
          key={movie.id}
          href={`/details/${movie.id}`}
          className="block"
        >
          <div className="mt-2 w-full overflow-hidden rounded-xl p-2.5 transition-all hover:bg-secondary sm:p-3">
            <div className="flex gap-3 sm:gap-4">
              {/* Poster */}
              <div className="h-[80px] w-[58px] shrink-0 overflow-hidden rounded-md sm:h-[90px] sm:w-[67px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Movie info */}
              <div className="min-w-0 flex-1">
                <CardTitle className="truncate text-sm sm:text-base md:text-lg">
                  {movie.title}
                </CardTitle>

                {/* Rating */}
                <div className="mt-1 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8 1.433 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.947l-4.12 2.166.787-4.586L1.333 6.28l4.607-.673L8 1.433Z"
                    />
                  </svg>

                  <p className="text-xs font-medium sm:text-sm">
                    {movie.vote_average.toFixed(1)}
                    <span className="text-muted-foreground">/10</span>
                  </p>
                </div>

                {/* See more */}
                <div className="mt-3 flex w-full items-center justify-end text-xs sm:text-sm">
                  See more
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {/* See all / No results */}
      {movies.length > 0 ? (
        <Link
          href={`/Search?searchValue=${searchValue}`}
          className="block"
        >
          <p className="mt-3 truncate text-sm font-medium hover:underline sm:text-base">
            See all results for &#34;{searchValue}&#34;
          </p>
        </Link>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          No results found.
        </p>
      )}
    </div>
  );
};

export default SearchPage;

