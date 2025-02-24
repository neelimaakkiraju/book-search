import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./redux/bookSlice";
import SearchBar from "./components/SearchBar";
import BookList from "./components/Booklist";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div>
            <h1>Book Search App</h1>
            <SearchBar />
            <BookList />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default App;
