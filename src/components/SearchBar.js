import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" placeholder="Search books..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => dispatch(fetchBooks(query))}>Search</button>
        </div>
    );
};

export default SearchBar;
