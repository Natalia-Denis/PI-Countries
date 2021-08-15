import axios from "axios";
import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  FILTER_BY_REGION,
  FILTER_BY_ACTIVITY,
  ORDER_BY,
  GET_QUERY_COUNTRY,
  GET_DETAIL
  
} from "./constantes";
import { COUNTRY_URL, QUERY_URL, ACTIVITIES_URL } from "../routes";

export function getCountries() {
  return async function (dispatch) {
    var countries = await axios.get(COUNTRY_URL);
    return dispatch({
      type: GET_COUNTRIES,
      payload: countries.data,
    });
  };
}

export function getQueryCountry(name){
  return async function (dispatch){
    try{
    var queryCountries = await axios.get(QUERY_URL + name);
    return dispatch({
      type: GET_QUERY_COUNTRY,
      payload:queryCountries.data
    })
  } catch (error){
      console.log(error)
  }}}

  export function getActivities(){
    return async function (dispatch){
      try{
      var activities = await axios.get(ACTIVITIES_URL);
      return dispatch({
        type: GET_ACTIVITIES,
        payload:activities.data
      })
    } catch (error){
        console.log(error)
    }}};

export function postActivities (payload){
  return async function (dispatch){
    const activity = await axios.post(ACTIVITIES_URL, payload)
    return activity;
  }
};

export function filterbyRegion(payload) {
  return {
    type: FILTER_BY_REGION,
    payload,
  };
}
export function filterbyActivity(payload) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
}
export function orderby(payload){
        return {
                type: ORDER_BY ,
                payload
        };
}

export function getDetail (id){
  return async function (dispatch) {
    var countries = await axios.get(COUNTRY_URL+'/'+id);
    return dispatch({
      type: GET_DETAIL,
      payload: countries.data,
    });
  };
}
