import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Movietype } from "../_util/type";
import Link from "next/link";

export const MovieCard = ({ movie }: { movie: Movietype }) => {
  return (
    <Link href={`/details/${movie.id}`} className="block w-full">
      <Card className="w-full overflow-hidden rounded-xl transition-opacity duration-200 hover:opacity-50">
        {/* Poster */}
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
          />
        </div>

        {/* Movie info */}
        <CardContent className="min-h-[78px] bg-secondary p-2 sm:min-h-[82px] sm:p-2.5 md:min-h-[85px]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
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

          <CardTitle className="mt-1 truncate text-sm sm:text-base md:text-lg">
            {movie.title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};