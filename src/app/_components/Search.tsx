
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SearchPage from "./SearchResult";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/Search") {
      router.push(`/Search?searchValue=${searchValue}`);
    }
  }, [searchValue, pathname, router]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          type="text"
          placeholder="Search movies..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setOpen(e.target.value.length > 0);
          }}
          onFocus={() => setOpen(true)}
          className="
            h-9
            w-[140px]
            text-sm
            sm:h-10
            sm:w-[220px]
            md:w-[300px]
            lg:w-[400px]
          "
        />
      </PopoverTrigger>

      {open && searchValue.length > 0 && pathname !== "/Search" && (
        <PopoverContent
          align="end"
          sideOffset={8}
          className="
            flex
            w-[calc(100vw-32px)]
            max-w-[550px]
            flex-col
            rounded-md
            border
            bg-background
            p-3
          "
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SearchPage searchValue={searchValue} />
        </PopoverContent>
      )}
    </Popover>
  );
};

export default Search;

