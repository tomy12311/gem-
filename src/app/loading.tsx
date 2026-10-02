import { Skeleton } from "@/components/ui/skeleton";

const MovieSkeletonRow = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:mt-8 lg:grid-cols-5 lg:gap-6">
      {Array.from({ length: 10 }, (_, i) => (
        <Skeleton
          key={i}
          className="aspect-[2/3] w-full rounded-xl bg-secondary"
        />
      ))}
    </div>
  );
};

const SectionSkeleton = () => {
  return (
    <div className="mt-8 sm:mt-10 md:mt-12">
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-7 w-[160px] rounded-full sm:h-8 sm:w-[230px]" />
        <Skeleton className="h-7 w-[100px] rounded-full sm:h-8 sm:w-[140px]" />
      </div>

      <MovieSkeletonRow />
    </div>
  );
};

export default function Loading() {
  return (
    <div className="w-full">
      {/* Hero skeleton */}
      <Skeleton className="h-[300px] w-full rounded-none bg-secondary sm:h-[420px] md:h-[500px] lg:h-[600px]" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-0">
        <SectionSkeleton />
        <SectionSkeleton />
        <SectionSkeleton />
      </div>
    </div>
  );
}