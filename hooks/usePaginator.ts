import { useState } from 'react';

interface UsePaginatorProps {
  itemsPerPage: number;
  totalItems: number;
}

interface UsePaginatorReturn {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const usePaginator = ({
  itemsPerPage,
  totalItems,
}: UsePaginatorProps): UsePaginatorReturn => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return {
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    startIndex,
    endIndex,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
};
