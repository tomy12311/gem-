"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import response from "../_util/response";
import { Movietype } from "../_util/type";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movietype[]>([]);
  const [videoKeys, setVideoKeys] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await response(
          "/movie/now_playing?language=en-US&page=1"
        );

        setMovies(data.results);

        const keys: { [key: number]: string } = {};

        for (const movie of data.results) {
          try {
            const videosdata = await response(
              `/movie/${movie.id}/videos?language=en-US`
            );

            const trailer = videosdata.results?.find(
              (video: any) =>
                video.site === "YouTube" &&
                video.type === "Trailer"
            );

            if (trailer) {
              keys[movie.id] = trailer.key;
            }
          } catch (error) {
            console.error(
              `Trailer fetch failed for movie ${movie.id}:`,
              error
            );
          }
        }

        setVideoKeys(keys);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="ml-0 w-full">
        {movies.map((movie, index) => (
          <CarouselItem
            key={movie.id || index}
            className="relative basis-full pl-0"
          >
            {/* Background */}
            <Link href={`/details/${movie.id}`} className="block">
              <div className="relative h-[420px] w-full overflow-hidden sm:h-[500px] md:h-[560px] lg:h-[600px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </Link>

            {/* Movie Information */}
            <div className="absolute inset-x-0 bottom-10 px-5 text-white sm:bottom-14 sm:px-8 md:bottom-20 md:left-10 md:right-auto md:w-[500px] lg:bottom-28 lg:left-[8%] lg:w-[500px] xl:left-[11%]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-sm font-medium sm:text-base">
                  Now Playing:
                </p>

                <h1 className="line-clamp-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                  {movie.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
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

                  <p className="text-sm font-medium">
                    {movie.vote_average.toFixed(1)}
                    <span className="text-white/60">/10</span>
                  </p>
                </div>

                {/* Overview */}
                <div className="line-clamp-3 max-w-[500px] text-sm leading-6 text-white/90 sm:text-base">
                  {movie.overview}
                </div>

                {/* Trailer */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="flex w-fit items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:text-base"
                    >
                      <Play size={20} />
                      Watch Trailer
                    </button>
                  </DialogTrigger>

                  <DialogContent className="w-[calc(100vw-32px)] max-w-[600px] p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>
                        {movie.title} - Trailer
                      </DialogTitle>

                      <DialogDescription>
                        Watch the official trailer.
                      </DialogDescription>
                    </DialogHeader>

                    {videoKeys[movie.id] ? (
                      <div className="relative aspect-video w-full overflow-hidden rounded-md">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoKeys[movie.id]}`}
                          title={`${movie.title} trailer`}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video items-center justify-center text-sm text-muted-foreground">
                        Trailer not available.
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation */}
      <CarouselPrevious className="left-3 sm:left-5 md:left-8" />
      <CarouselNext className="right-3 sm:right-5 md:right-8" />
    </Carousel>
  );
};

export default NowPlaying;