import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types";

export const addArticle = payload => ({
  type: ADD_ARTICLE,
  payload
});

export const foundBadWord = payload => ({
  type: FOUND_BAD_WORD,
  payload
});
