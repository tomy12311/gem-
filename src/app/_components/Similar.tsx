
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { Movietype } from "../_util/type";
import Link from "next/link";

const Similar = ({
  movies,
  a,
  id,
}: {
  movies: Movietype[];
  a: boolean;
  id: string;
}) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-4 sm:mt-10 sm:px-6 md:mt-12 md:px-8">
      {/* Header */}
      <div className="mb-5 flex w-full items-center justify-between gap-4 sm:mb-6 md:mb-8">
        <h3 className="text-xl font-semibold sm:text-2xl">
          More like this
        </h3>

        {a && (
          <Link
            href={`/category/${id}/similar`}
            className="flex shrink-0 items-center text-sm font-medium transition-opacity hover:opacity-70 sm:text-base"
          >
            See more
            <ArrowRight className="ml-1.5 h-4 w-4 sm:ml-2" />
          </Link>
        )}
      </div>

      {/* Movies */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-6">
        {movies?.map((movie: Movietype) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default Similar;

