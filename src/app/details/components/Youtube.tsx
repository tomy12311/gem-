import { Videotype } from "@/app/_util/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

const Youtube = ({ videodata }: { videodata: Videotype }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-5 sm:left-5 sm:gap-3 md:left-6 lg:left-8"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-2 sm:h-10 sm:w-10">
            <Play className="h-4 w-4 text-black sm:h-5 sm:w-5" />
          </div>

          <p className="text-sm text-white sm:text-base">
            Play trailer
          </p>
        </button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100vw-32px)] max-w-[800px] p-3 sm:p-5">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg">
            Play trailer
          </DialogTitle>
          <DialogDescription>
            Watch the movie trailer.
          </DialogDescription>
        </DialogHeader>

        {videodata?.key ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <iframe
              src={`https://www.youtube.com/embed/${videodata.key}`}
              title="Movie trailer"
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
  );
};

export default Youtube;