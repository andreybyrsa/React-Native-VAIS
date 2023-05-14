import { Card } from "../../../domain/Card";

interface CardInitialState {
   cards: Card[]
}

const initialState: CardInitialState = {
   cards: [],
}

export default initialState