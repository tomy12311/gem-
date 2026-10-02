import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Movietype } from "../_util/type";
import { MovieCard } from "./MovieCard";

const Popular = ({
  movies,
  a,
}: {
  movies: Movietype[];
  a: boolean;
}) => {
  return (
    <section className="mt-8 w-full sm:mt-10 md:mt-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Popular
          </h3>

          {a && (
            <Link
              href="/category/popular"
              className="flex shrink-0 items-center text-sm font-medium transition-opacity hover:opacity-70 sm:text-base"
            >
              See more
              <ArrowRight className="ml-1.5 h-4 w-4 sm:ml-2" />
            </Link>
          )}
        </div>

        {/* Movies */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:mt-8 lg:grid-cols-5 lg:gap-6">
          {movies?.map((movie: Movietype) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;