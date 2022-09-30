import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: "Billo Shikha", author: "Unknown" },
        { id: 2, title: "Popy Guide", author: "Popy" }
    ]
};
export const booksSlice = createSlice({
    name: "books", initialState: initialBooks, reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id != id)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const bookExits = state.books.filter((book) => book.id == id)
            if (bookExits) {
                bookExits[0].title = title;
                bookExits[0].author = author;

            }
        },
    }
});

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
