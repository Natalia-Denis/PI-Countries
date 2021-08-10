import {GET_COUNTRIES} from '../actions/constantes'


var initialState = {
    countries: []
}

function reducer(state = initialState, action) {
    //un switch con nuestras acciones posibles
    switch(action.type) {
        case GET_COUNTRIES:
         return {
            ...state,
            countries: action.payload
        }
        default: return state
    }
}

export default reducer;