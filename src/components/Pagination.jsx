import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({ total, page, setPage }) => {
  const newTotal = parseInt(total / 10) + 1;
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= newTotal &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const maxPagesToShow = 5;
  let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > newTotal) {
    endPage = newTotal;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [...Array(endPage - startPage + 1)].map(
    (_, i) => startPage + i
  );

  return (
    <>
      <ol className="flex justify-center gap-1 text-sm sm:text-xs font-medium my-8">
        <li>
          <button
            onClick={() => selectPageHandler(page - 1)}
            className={
              page > 1
                ? "inline-flex size-9 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 rtl:rotate-180"
                : "opacity-0"
            }
          >
            <span className="sr-only">Prev Page</span>
            <MdNavigateBefore className="h-3 w-3" />
          </button>
        </li>

        {pages.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button
                onClick={() => selectPageHandler(pageNumber)}
                className={`${
                  page === pageNumber
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white  text-gray-900 border"
                } block size-9 rounded text-center leading-8`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < newTotal
                ? "inline-flex size-9 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 rtl:rotate-180"
                : "opacity-0"
            }
          >
            <span className="sr-only">Next Page</span>
            <MdNavigateNext className="h-3 w-3" />
          </button>
        </li>
      </ol>
    </>
  );
};

export default Pagination;
