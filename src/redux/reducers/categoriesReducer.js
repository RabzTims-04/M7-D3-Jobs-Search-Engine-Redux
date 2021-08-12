import { initialState } from "../store/store"
import { FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_LOADING } from "../actions/actionTypes"

const categoriesReducer = (state = initialState.categories, action) => {
    
    switch(action.type){
        case FETCH_CATEGORIES: return {
            ...state,
                categoriesArray: action.payload
        }
        case FETCH_CATEGORIES_ERROR: return {
            ...state,
            error: action.payload
        }
        case FETCH_CATEGORIES_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        default: {
            return state
        }
    }
}

export default categoriesReducer