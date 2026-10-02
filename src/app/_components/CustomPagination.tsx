"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface CustomPaginationProps {
  page: number;
  totalPages: number;
}

const CustomPagination = ({
  page,
  totalPages,
}: CustomPaginationProps) => {
  const searchParams = useSearchParams();

  const getUpdatedHref = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    return `?${params.toString()}`;
  };

  const getPageNumbers = (current: number, total: number) => {
    const pages: number[] = [];

    for (let i = 0; i < 3; i++) {
      if (current + i <= total) {
        pages.push(current + i);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <div className="w-full overflow-x-auto py-2">
      <Pagination className="w-full">
        <PaginationContent className="flex-nowrap gap-1 sm:gap-2">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={getUpdatedHref(Math.max(1, page - 1))}
              className={`h-8 px-2 text-xs sm:h-9 sm:px-3 sm:text-sm ${
                page === 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            />
          </PaginationItem>

          {/* Page numbers */}
          {pageNumbers.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={getUpdatedHref(pageNumber)}
                className="h-8 w-8 text-xs sm:h-9 sm:w-9 sm:text-sm"
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={getUpdatedHref(
                Math.min(totalPages, page + 1)
              )}
              className={`h-8 px-2 text-xs sm:h-9 sm:px-3 sm:text-sm ${
                page + 2 > totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;