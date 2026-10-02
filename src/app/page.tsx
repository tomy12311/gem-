import NowPlaying from "./_components/NowPlaying";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";
import Upcoming from "./_components/Upcoming";
import response from "./_util/response";

export default async function Home() {
  const popularData = await response(
    "/movie/popular?language=en-US&page=1"
  );

  const upcomingData = await response(
    "/movie/upcoming?language=en-US&page=1"
  );

  const topRatedData = await response(
    "/movie/top_rated?language=en-US&page=1"
  );

  const popularMovies = popularData.results.slice(0, 10);
  const upcomingMovies = upcomingData.results.slice(0, 10);
  const topRatedMovies = topRatedData.results.slice(0, 10);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className="w-full">
      {/* Hero / Now Playing */}
      <NowPlaying />

      {/* Movie sections */}
      <div className="relative mb-10 flex w-full flex-col gap-2 sm:mb-12 md:mb-[52px]">
        <Upcoming
          movies={upcomingMovies}
          a={true}
        />

        <Popular
          movies={popularMovies}
          a={true}
        />

        <Toprated
          movies={topRatedMovies}
          a={true}
        />
      </div>
    </main>
  );
}