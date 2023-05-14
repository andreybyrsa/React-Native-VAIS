import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { Card } from "../../../domain/Card";

const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {
      AddCard(state, action: PayloadAction<Card>) {
         state.cards.push(action.payload)
      },
      removeCard(state, action: PayloadAction<string>) {
         state.cards = state.cards.filter((elem) => elem.cardName != action.payload)
      },
   },
})

export const { AddCard, removeCard } = cardSlice.actions

export default cardSlice.reducer