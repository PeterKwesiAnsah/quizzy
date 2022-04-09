import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Question = {
  num: number;
  correct: boolean;
  choice: "True" | "False";
};
export type quizState = {
  results: Question[];
};

const initialState: quizState = {
  results: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answer: (state, action: PayloadAction<Question>) => {
      state.results.push(action.payload);
    },
    reset: (state) => {
      state.results = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { answer, reset } = quizSlice.actions;

export default quizSlice.reducer;
