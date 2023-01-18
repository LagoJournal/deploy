import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  ORDER_COUNTRIES,
  SEARCH_NAME,
  FILTERMEISTER3000,
  SET_ORDER_UDPATE,
  ADD_COUNTRY_CARD,
  DELETE_COUNTRY_CARD,
  DISPLAY_POPUP,
  ACTIVITY_ERROR,
  CLEAR_DETAILS,
} from "../actions";

const initialState = {
  countries: [],
  countryDetails: [],
  filterValues: [],
  filteredBackup: [],
  orderedBackup: [],
  countriesCards: [],
  updateOrder: "",
  displayPopUp: [false, ""],
  activityError: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filterValues: action.payload.map((e) => [e.activities, e.continent]),
        filteredBackup: action.payload,
        orderedBackup: action.payload,
      };
    case SEARCH_NAME:
      return {
        ...state,
        countries: action.payload,
        filteredBackup: action.payload,
        orderedBackup: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetails: action.payload,
      };

    case FILTERMEISTER3000:
      let continentsFiltered = state.filteredBackup;
      if (action.payload[0] !== "All:")
        continentsFiltered = continentsFiltered.filter(
          (e) => e.continent === action.payload[0]
        );

      let activitiesFiltered = continentsFiltered;
      if (action.payload[1] !== "All:")
        activitiesFiltered = activitiesFiltered.filter((e) =>
          e.activities.map((elem) => elem.name).includes(action.payload[1])
        );

      return {
        ...state,
        countries: activitiesFiltered,
        orderedBackup: activitiesFiltered,
      };

    case ORDER_COUNTRIES:
      let countriesorder = state.orderedBackup;
      if (action.payload === "A to Z") {
        countriesorder = countriesorder.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
      } else if (action.payload === "Z to A") {
        countriesorder = countriesorder.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
        });
      } else if (action.payload === "Population ↓") {
        countriesorder = countriesorder.sort((a, b) => {
          if (a.population < b.population) return 1;
          if (a.population > b.population) return -1;
          return 0;
        });
      } else if (action.payload === "Population ↑") {
        countriesorder = countriesorder.sort((a, b) => {
          if (a.population > b.population) return 1;
          if (a.population < b.population) return -1;
          return 0;
        });
      }
      return {
        ...state,
        countries: countriesorder,
      };
    case SET_ORDER_UDPATE:
      let msg = "";
      if (state.updateOrder.length === 0) {
        msg = "Update";
      }
      return {
        ...state,
        updateOrder: msg,
      };
    case ADD_COUNTRY_CARD:
      if (
        state.countriesCards.filter((e) => e.id === action.payload.id)
          .length === 0
      ) {
        return {
          ...state,
          countriesCards: [...state.countriesCards, action.payload],
        };
      }
      return {
        ...state,
      };
    case DELETE_COUNTRY_CARD:
      return {
        ...state,
        countriesCards: state.countriesCards.filter(
          (e) => e.id !== action.payload
        ),
      };
    case DISPLAY_POPUP:
      let check = true;
      if (state.displayPopUp[0]) check = false;

      return {
        ...state,
        displayPopUp: [check, action.payload],
      };
    case ACTIVITY_ERROR:
      return {
        ...state,
        activityError: action.payload,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        countryDetails: [],
      };
    default:
      return initialState;
  }
};
export default rootReducer;
