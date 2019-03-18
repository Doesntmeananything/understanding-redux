import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { articles: [...state.articles, action.payload] };

    case FOUND_BAD_WORD:
      return { articles: [...state.articles, action.payload] };

    default:
      return state;
  }
}

export default rootReducer;
