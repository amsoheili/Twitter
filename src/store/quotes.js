import { createSlice } from "@reduxjs/toolkit";
const initialQuotesList = {
  list: [
    {
      id: "q1",
      text: "Quote 1",
      author: "admin",
      comments: [{ id: "q1c1", commentText: "comment on quote 1" }],
    },
    {
      id: "q2",
      text: "Quote 2",
      author: "admin",
      comments: [{ id: "q2c1", commentText: "comment on quote 2" }],
    },
  ],
};
const quotesSlice = createSlice({
  name: "quotes",
  initialState: initialQuotesList,
  reducers: {
    addQuote(state, action) {
      state.list.push({
        id: action.payload.id,
        author: action.payload.author,
        text: action.payload.text,
      });
    },
    removeQuote(state, action) {
      state.list = state.list.filter((quote) => quote.id !== action.payload.id);
    },
  },
});

export const quoteActions = quotesSlice.actions;

export default quotesSlice.reducer;
