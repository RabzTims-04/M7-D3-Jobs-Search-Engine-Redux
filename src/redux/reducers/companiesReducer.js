import { initialState } from "../store/store"
import { FETCH_COMPANIES, FETCH_COMPANIES_ERROR } from "../actions/actionTypes"


const companiesReducer = (state = initialState.companies, action) => {
    
    switch(action.type){
        case FETCH_COMPANIES: return {
            ...state,
                companiesArray: action.payload
        }
        case FETCH_COMPANIES_ERROR: return {
            ...state,
            error: action.payload
        }
        default: {
            return state
        }
    }
}

export default companiesReducer