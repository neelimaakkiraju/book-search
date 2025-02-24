const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <span> Page {page} of {totalPages} </span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
