
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mt-8 flex justify-between sm:mt-10 md:mt-12">
          <Skeleton className="h-7 w-[160px] rounded-full sm:h-8 sm:w-[200px] md:w-[230px]" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:mt-8 lg:grid-cols-5 lg:gap-6">
          {Array.from({ length: 20 }, (_, i) => (
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

