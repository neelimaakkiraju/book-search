import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const BookList = () => {
    const { books, status, error } = useSelector((state) => state.books);

    if (status === "loading") return <p>Loading books...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div>
            {books.length > 0 ? books.map((book) => <BookItem key={book.id} book={book} />) : <p>No books found.</p>}
        </div>
    );
};

export default BookList;
