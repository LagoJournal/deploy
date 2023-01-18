import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SEARCH_NAME = "SEARCH_NAME";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const FILTERMEISTER3000 = "FILTERMEISTER3000";
export const SET_ORDER_UDPATE = "SET_ORDER_UDPATE";
export const ADD_COUNTRY_CARD = "ADD_COUNTRY_CARD";
export const DELETE_COUNTRY_CARD = "DELETE_COUNTRY_CARD";
export const DISPLAY_POPUP = "DISPLAY_POPUP";
export const ACTIVITY_ERROR = "ACTIVITY_ERROR";
export const CLEAR_DETAILS = "CLEAR_DETAILS";

export const getCountryName = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries?name=${name}`)
      .then((res) => res.json())
      .then((payload) => {
        dispatch({
          type: SEARCH_NAME,
          payload: payload,
        });
      })
      .catch(() =>
        dispatch({
          type: SEARCH_NAME,
          payload: [],
        })
      );
  };
};

export const getCountries = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries`)
      .then((res) => res.json())
      .then((payload) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: payload,
        });
      });
  };
};

export const getCountriesDetails = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((res) => res.json())
      .then((payload) => {
        dispatch({
          type: GET_COUNTRY_DETAIL,
          payload: payload,
        });
      });
  };
};

export const createActivity = (body) => {
  return async function (dispatch) {
    const { name, difficulty, duration, season, countryIds } = body;
    axios
      .post("http://localhost:3001/activities", {
        name,
        difficulty,
        duration,
        season,
        countryIds,
      })
      .catch((error) => {
        dispatch({
          type: ACTIVITY_ERROR,
          payload: error.response.data,
        });
      });
  };
};

export const filterCountries = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTERMEISTER3000,
      payload,
    });
  };
};

export const orderCountries = (payload) => {
  return function (dispatch) {
    dispatch({
      type: ORDER_COUNTRIES,
      payload,
    });
  };
};

export const setOrderUpdate = () => {
  return function (dispatch) {
    dispatch({
      type: SET_ORDER_UDPATE,
    });
  };
};

export const addCountryCard = (payload) => {
  return function (dispatch) {
    dispatch({
      type: ADD_COUNTRY_CARD,
      payload,
    });
  };
};

export const deleteCountryCard = (payload) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_COUNTRY_CARD,
      payload,
    });
  };
};

export const displayPopUp = (payload) => {
  return function (dispatch) {
    dispatch({
      type: DISPLAY_POPUP,
      payload,
    });
  };
};

export const clearActivityError = () => {
  return function (dispatch) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: "",
    });
  };
};

export const popUpError = (payload) => {
  return function (dispatch) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload,
    });
  };
};

export const clearDetails = () => {
  return function (dispatch) {
    dispatch({
      type: CLEAR_DETAILS,
    });
  };
};
