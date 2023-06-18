import React from "react";
import PageLink from "./PageLink";
import "./Pagination.css";

export type Properties = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
}: Properties) {
  const pageNums = [1, 2, 3];
  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink href="#" onClick={() => setCurrentPage(currentPage - 1)}>
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
      <PageLink href="#" onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </PageLink>
    </nav>
  );
}
