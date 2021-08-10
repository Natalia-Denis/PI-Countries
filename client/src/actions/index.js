import axios from 'axios'
import { GET_COUNTRIES , GET_ACTIVITIES } from "./constantes"
import {COUNTRY_URL} from '../routes'

export function getCountries(){
        return async function (dispatch){
        var countries = await axios.get(COUNTRY_URL);
        return dispatch ({
                type: GET_COUNTRIES,
                payload:countries.data
                        })
                }
        }
