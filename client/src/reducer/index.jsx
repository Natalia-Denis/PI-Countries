import {
  GET_COUNTRIES,
  FILTER_BY_REGION,
  FILTER_BY_ACTIVITY,
  ORDER_BY,
  GET_QUERY_COUNTRY,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  GET_DETAIL,
  } from "../actions/constantes";

var initialState = {
  countries: [],
  allCountries: [],
  activities:[],
  detail:{}
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
      case GET_QUERY_COUNTRY:
        return {
          ...state,
          countries: action.payload
        };
        case GET_ACTIVITIES:
          return {
            ...state,
            activities:action.payload
          }
        case POST_ACTIVITY:
          return {
            ...state
          };
    case FILTER_BY_REGION:
      const allCountries = state.allCountries;

      if (action.payload === "All") {
        var countriesFiltered = allCountries;
      } else {
        countriesFiltered = allCountries.filter(
          (el) => el.continent === action.payload
        );
      }
      return {
        ...state,
        countries: countriesFiltered,
      };
    case FILTER_BY_ACTIVITY:
      break;
    case ORDER_BY:
      var arr;
      if (action.payload === "desPop") {
        arr = state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion) return 1;
          if (b.poblacion > a.poblacion) return -1;
          return 0;
        });
      }
      if (action.payload === "ascPop")
      arr =  state.countries.sort(function (a, b) {
          if (a.poblacion > b.poblacion) return -1;
          if (b.poblacion > a.poblacion) return 1;
          return 0;
        });

      if (action.payload === "desName")
      arr =  state.countries.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
      if (action.payload === "ascName")
      arr =  state.countries.sort(function (a, b) {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });

      return {
        ...state,
        countries: arr,
      };
      case GET_DETAIL:
      return{
        ...state,
        detail:action.payload
      }
    default:
      return state;
  }
}

export default reducer;
