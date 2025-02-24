import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Base URL
const API_BASE = "http://64.227.142.191:8080/application-test-v1.1/books";

// Fetch books (async thunk)
export const fetchBooks = createAsyncThunk("books/fetchBooks", async (title = "") => {
    const response = await fetch(`${API_BASE}?title=${title}`);
    const data = await response.json();
    return data;
});

// Add new book
export const addBook = createAsyncThunk("books/addBook", async (book) => {
    const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
    return await response.json();
});

// Edit book
export const editBook = createAsyncThunk("books/editBook", async ({ id, updatedBook }) => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
    });
    return await response.json();
});

const bookSlice = createSlice({
    name: "books",
    initialState: { books: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => { state.status = "loading"; })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.books.push(action.payload);
            })
            .addCase(editBook.fulfilled, (state, action) => {
                const index = state.books.findIndex((b) => b.id === action.payload.id);
                if (index !== -1) state.books[index] = action.payload;
            });
    },
});

export default bookSlice.reducer;
