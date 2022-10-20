import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotes";
import highlightedQuoteReducer from "./highlighted-quote";

const store = configureStore({
  reducer: { quotes: quotesReducer, highlightedQuote: highlightedQuoteReducer },
});

export default store;
