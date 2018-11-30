
export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";
export const SET_ORIGIN = "SET_ORIGIN";
export const SET_DESTINATION = "SET_DESTINATION";
export const SET_DEP_DATE = "SET_DEP_DATE";
export const SET_RET_DATE = "SET_RET_DATE";
export const SET_PAX_COUNT = "SET_PAX_COUNT";
export const SET_ALL_SEARCH_PARAMS = "SET_ALL_SEARCH_PARAMS";

export const setSearchType = (data) => ({
  type: SET_SEARCH_TYPE,
  data
});

export const setOrigin = (data) => ({
  type: SET_ORIGIN,
  data
});

export const setDestination = (data) => ({
  type: SET_DESTINATION,
  data
});


export const setDepDate = (data) => ({
  type: SET_DEP_DATE,
  data
});

export const setRetDate = (data) => ({
  type: SET_RET_DATE,
  data
});

export const setPaxCount = (data) => ({
  type: SET_PAX_COUNT,
  data
});

export const setAllSearchParams = (data) => ({
  type: SET_ALL_SEARCH_PARAMS,
  data
});