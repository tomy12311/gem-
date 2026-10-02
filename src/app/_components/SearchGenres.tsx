
"use client";

import { Toggle } from "@radix-ui/react-toggle";
import { GenreType } from "../_util/type";
import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchGenres = ({
  genreMovies,
}: {
  genreMovies: GenreType[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    const genres = searchParams.get("genres");

    if (genres) {
      setSelectedGenres(genres.split(",").map(Number));
    } else {
      setSelectedGenres([]);
    }
  }, [searchParams]);

  const handleGenreToggle = (genreId: number) => {
    let newSelectedGenres: number[];

    if (selectedGenres.includes(genreId)) {
      newSelectedGenres = selectedGenres.filter(
        (id) => id !== genreId
      );
    } else {
      newSelectedGenres = [...selectedGenres, genreId];
    }

    const params = new URLSearchParams(searchParams.toString());

    if (newSelectedGenres.length > 0) {
      params.set("genres", newSelectedGenres.join(","));
    } else {
      params.delete("genres");
    }

    router.push(`/Search?${params.toString()}`);
  };

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div className="flex w-full flex-wrap gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
        {genreMovies?.map((genre: GenreType) => (
          <Toggle
            key={genre.id}
            onPressedChange={() => handleGenreToggle(genre.id)}
            className={`inline-flex min-h-[34px] items-center justify-center rounded-full border px-2.5 py-1.5 text-xs transition-colors sm:min-h-[36px] sm:px-3 sm:text-sm md:px-3.5 ${
              selectedGenres.includes(genre.id)
                ? "border-primary bg-primary text-primary-foreground"
                : "border-[#27272A] hover:bg-accent"
            }`}
          >
            <span className="whitespace-nowrap">
              {genre.name}
            </span>

            <ChevronRight className="ml-0.5 h-3.5 w-3.5 shrink-0 sm:ml-1 sm:h-4 sm:w-4" />
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default SearchGenres;

