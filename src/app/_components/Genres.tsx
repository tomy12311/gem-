import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import response from "../_util/response";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Allgenres from "./Allgenres";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 px-3 text-sm sm:h-10 sm:px-4"
        >
          Genre
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-[calc(100vw-32px)] max-w-[537px] border-none bg-transparent p-0 shadow-none"
      >
        <Card className="w-full rounded-md p-4 sm:p-5">
          <h3 className="text-xl font-medium sm:text-2xl">
            Genres
          </h3>

          <div className="mt-1 text-sm text-muted-foreground sm:text-base">
            See lists of movies by genre
          </div>

          <div className="my-3 border border-[#27272A]" />

          <div className="w-full">
            <Allgenres genreMovies={genreMovies} />
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default Genre;