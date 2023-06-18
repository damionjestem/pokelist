import React from "react";
import PageLink from "./PageLink";
import "./Pagination.css";

export type Properties = {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  setCurrentPage,
}: Properties) {
  const pageNums = [1, 2, 3];
  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        href="#"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, i) => (
        <PageLink
          key={i}
          href="#"
          active={pageNum == currentPage}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink
        disabled={currentPage === lastPage}
        href="#"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </PageLink>
    </nav>
  );
}
