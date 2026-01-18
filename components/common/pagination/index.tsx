"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/terrorui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
  pageSize?: number;
  totalItems?: number;
}

export default function PaginationGeneric({
  currentPage,
  totalPages,
  onPageChange,
  siblingsCount = 1,
  pageSize = 10,
  totalItems,
}: Props) {
  if (totalPages <= 1) return null;

  /**
   * Gera as páginas visíveis
   * - primeira
   * - última
   * - atual ± siblings
   * - ellipsis quando necessário
   */
  const pages: Array<number | "ellipsis"> = [];

  let lastAddedPage: number | null = null;

  for (let page = 1; page <= totalPages; page++) {
    const isFirst = page === 1;
    const isLast = page === totalPages;
    const isNear = Math.abs(page - currentPage) <= siblingsCount;

    if (isFirst || isLast || isNear) {
      pages.push(page);
      lastAddedPage = page;
    } else if (
      lastAddedPage !== null &&
      page - lastAddedPage > 1
    ) {
      pages.push("ellipsis");
      lastAddedPage = page;
    }
  }

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = totalItems
    ? Math.min(currentPage * pageSize, totalItems)
    : currentPage * pageSize;

  return (
    <>
      <Pagination>
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {pages.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={`page-${item}`}>
                <PaginationLink
                  isActive={item === currentPage}
                  onClick={() => onPageChange(item)}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {totalItems && (
        <p className="text-center mt-4 text-muted-foreground font-mono text-sm">
          Mostrando {startItem}-{endItem} de {totalItems} registros
        </p>
      )}
    </>
  );
}
