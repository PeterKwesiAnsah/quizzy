import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type quizState = {
  results: {
    num: number;
    correct: boolean;
    choice: "True" | "False";
  }[];
};

const initialState: quizState = {
  results: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answer: (state, action: PayloadAction<quizState["results"][0]>) => {
      state.results.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { answer } = quizSlice.actions;

export default quizSlice.reducer;
