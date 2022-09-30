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
    }
});

export const { showBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
