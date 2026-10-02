
import Similar from "@/app/_components/Similar";
import { formatRuntime } from "@/app/_util/constant";
import response from "@/app/_util/response";
import { CastMember, credittype, detailtype } from "@/app/_util/type";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Youtube from "../components/Youtube";

interface Props {
  params: Promise<{ moviesid: string }>;
}

const page = async (props: Props) => {
  const params = await props.params;
  const movieid = params.moviesid;

  const data: detailtype = await response(
    `/movie/${movieid}?language=en-US`
  );

  const credits = await response(
    `/movie/${movieid}/credits?language=en-US`
  );

  const crew: credittype[] = credits.crew;
  const cast = credits.cast;

  const similarMovies = await response(
    `/movie/${movieid}/similar?language=en-US&page=1`
  );

  const videosdata = await response(
    `/movie/${movieid}/videos?language=en-US`
  );

  const videodata = videosdata.results[0];
  const similar = similarMovies.results.slice(0, 5);

  const director = crew.find(
    (member) => member.known_for_department === "Directing"
  )?.name;

  const writers = crew
    .filter((member) => member.known_for_department === "Writing")
    .map((writer) => writer.name);

  const stars = cast
    .slice(0, 5)
    .map((star: CastMember) => star.name);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-[52px]">
        {/* Movie title + Rating */}
        <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-[36px]">
              {data.title}
            </h1>

            <p className="mt-1 text-sm text-muted-foreground sm:text-base md:text-[18px]">
              {data.release_date} · PG · {formatRuntime(data.runtime)}
            </p>
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="h-6 w-6 sm:h-7 sm:w-7"
              >
                <path
                  d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <p className="text-xs font-medium sm:text-sm">
                  {data.vote_average.toFixed(1)}
                  <span className="text-muted-foreground">/10</span>
                </p>

                <p className="text-xs sm:text-sm">
                  {(data.vote_count / 1000).toFixed(1)}k
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Poster + Backdrop */}
        <div className="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:gap-8">
          {/* Poster */}
          <div className="mx-auto w-full max-w-[290px] shrink-0 md:mx-0">
            <Image
              width={1000}
              height={1000}
              alt={data.title}
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              className="aspect-[2/3] w-full rounded-xl object-cover"
            />
          </div>

          {/* Backdrop + Youtube */}
          <div className="relative w-full min-w-0">
            <Image
              width={1000}
              height={1000}
              alt={data.title}
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              className="aspect-video w-full rounded-xl object-cover md:h-[524px] md:aspect-auto"
            />

            <Youtube videodata={videodata} />
          </div>
        </div>

        {/* Movie Information */}
        <div className="mt-6 flex flex-col gap-5 sm:gap-6">
          {/* Genres */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.genres.map((genre) => (
              <Badge
                key={genre.id}
                variant="outline"
                className="rounded-full border border-[#27272A] px-2 py-1 text-[11px] sm:text-[12px]"
              >
                {genre.name}
              </Badge>
            ))}
          </div>

          {/* Overview */}
          <p className="text-sm leading-6 sm:text-base sm:leading-7">
            {data.overview}
          </p>

          {/* Director */}
          <div className="flex flex-col gap-1 border-b border-[#E4E4E7] pb-3 sm:flex-row sm:gap-10">
            <p className="shrink-0 text-sm font-semibold sm:text-[16px]">
              Director
            </p>
            <p className="text-sm sm:text-base">
              {director || "Unknown"}
            </p>
          </div>

          {/* Writers */}
          <div className="flex flex-col gap-1 border-b border-[#E4E4E7] pb-3 sm:flex-row sm:gap-10">
            <p className="shrink-0 text-sm font-semibold sm:text-[16px]">
              Writers
            </p>
            <p className="text-sm leading-6 sm:text-base">
              {writers.join(" · ") || "Unknown"}
            </p>
          </div>

          {/* Stars */}
          <div className="flex flex-col gap-1 border-b border-[#E4E4E7] pb-3 sm:flex-row sm:gap-12">
            <p className="shrink-0 text-sm font-semibold sm:text-[16px]">
              Stars
            </p>
            <p className="text-sm leading-6 sm:text-base">
              {stars.join(" · ") || "Unknown"}
            </p>
          </div>
        </div>

        {/* Similar Movies */}
        <Similar
          id={params.moviesid}
          movies={similar}
          a={true}
        />
      </div>
    </div>
  );
};

export default page;

