
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-[52px]">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-4">
          <div className="mb-6 flex min-w-0 flex-col gap-3">
            <Skeleton className="h-8 w-[180px] rounded-full bg-secondary sm:h-10 sm:w-[250px]" />
            <Skeleton className="h-6 w-[180px] rounded-full bg-secondary sm:h-8 sm:w-[250px]" />
          </div>

          <div className="flex shrink-0 flex-col gap-3">
            <Skeleton className="h-4 w-[65px] rounded-full bg-secondary sm:h-5 sm:w-[83px]" />
            <Skeleton className="h-3 w-[65px] rounded-full bg-secondary sm:h-4 sm:w-[83px]" />
          </div>
        </div>

        {/* Poster + Backdrop */}
        <div className="flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:gap-8">
          <Skeleton className="aspect-[2/3] w-full rounded-xl md:h-[600px] md:w-[290px] md:shrink-0" />

          <Skeleton className="aspect-video w-full rounded-xl md:h-[600px] md:aspect-auto md:flex-1" />
        </div>

        {/* Description */}
        <div className="mt-6 flex flex-col gap-5 sm:gap-6">
          <div className="flex gap-3">
            <Skeleton className="h-5 w-[220px] rounded-full bg-secondary sm:h-6 sm:w-[350px]" />
          </div>

          <div className="flex flex-col gap-3">
            <Skeleton className="h-8 w-full rounded-full bg-secondary sm:h-10" />
            <Skeleton className="h-7 w-[70%] rounded-full bg-secondary sm:h-8 sm:w-[400px]" />
            <Skeleton className="h-7 w-[90%] rounded-full bg-secondary sm:h-8 sm:w-[700px]" />
            <Skeleton className="h-7 w-[90%] rounded-full bg-secondary sm:h-8 sm:w-[700px]" />
          </div>
        </div>

        {/* Section Titles */}
        <div className="mt-10 flex items-center justify-between gap-4 sm:mt-[52px]">
          <Skeleton className="h-7 w-[160px] rounded-full sm:h-8 sm:w-[230px]" />
          <Skeleton className="h-7 w-[160px] rounded-full sm:h-8 sm:w-[230px]" />
        </div>

        {/* Similar Movies */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-6">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton
              key={i}
              className="aspect-[2/3] w-full rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

