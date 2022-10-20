import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialHighlightedQuoteState = {
  highlightedQuote: { author: "admin", text: "test" },
};

const highlightedQuoteSlice = createSlice({
  name: "highlightedQuote",
  initialState: initialHighlightedQuoteState,
  reducers: {
    setHighlightedQuote(state, action) {
      state.highlightedQuote = action.payload;
    },
  },
});

export const highlightedQuoteActions = highlightedQuoteSlice.actions;

export default highlightedQuoteSlice.reducer;
