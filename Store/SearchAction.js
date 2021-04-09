import { GETSEARCHMOVIES } from "./SearchConstant";
import axios from "axios";

export const getSearchData = (name, year, type) => (dispatch) => {
  const API = `http://www.omdbapi.com/?s=${name}&type=${type}&y=${year}&apikey=9bea682b&`;
  axios
    .get(API)
    .then((res) =>
      dispatch({ type: GETSEARCHMOVIES.GET_MOVIES_SUCCESS, payload: res })
    )
    .catch((err) => console.error(err));
};
