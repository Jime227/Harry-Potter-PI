import axios from "axios";

export function getCharacters() {
  return async (dispatch) => {
    const all = await axios.get("http://localhost:3001/all");
    return dispatch({
      type: "GET_CHARACTERS",
      payload: all.data,
    });
  };
}

export const filterAncestry = (payload) => {
  return (dispatch) =>
    dispatch({
      type: "FILTER_PJ",
      payload: payload,
    });
};

export function addPj(obj) {
  return async function () {
    return await axios.post("http://localhost:3001/addpj", obj);
  };
}
