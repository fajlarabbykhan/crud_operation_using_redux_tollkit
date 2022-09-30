import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = {
    books: [
        { id: uuidv4(), title: "Billo Shikha", author: "Unknown" },
        { id: uuidv4(), title: "Popy Guide", author: "Popy" }
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
