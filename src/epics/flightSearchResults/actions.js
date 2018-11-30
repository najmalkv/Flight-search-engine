
export const SET_RESULTS = "SET_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export const SET_FILTER_VAL = "SET_FILTER_VAL";


export const setResults = (data) => ({
  type: SET_RESULTS,
  data
});

export const clearResults = (data) => ({
  type: CLEAR_RESULTS,
  data
});

export const setFilterValue = (data) => ({
  type: SET_FILTER_VAL,
  data
});
