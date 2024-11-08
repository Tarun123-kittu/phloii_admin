import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 7;

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
        pageNumbers.push(i);
      }
      if (totalPages > maxVisiblePages) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = Math.max(1, totalPages - maxVisiblePages + 1); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      if (totalPages > maxVisiblePages) {
        pageNumbers.unshift('...');
        pageNumbers.unshift(1);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumbers.push(i);
      }
      if (currentPage - 3 > 1) {
        pageNumbers.unshift('...');
        pageNumbers.unshift(1);
      }
      if (currentPage + 3 < totalPages) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <a
            onClick={() => onPageChange(currentPage - 1)}
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
            href="#"
            aria-disabled={currentPage === 1}
          >
            Previous
          </a>
        </li>

        {generatePageNumbers().map((page) => (
          <li key={page}>
            <a
              onClick={() => onPageChange(page)}
              className={`relative block rounded px-3 py-1.5 text-sm ${currentPage === page ? 'bg-blue-500 text-white' : 'text-neutral-600'} transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
              href="#"
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
            href="#"
            aria-disabled={currentPage === totalPages}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;