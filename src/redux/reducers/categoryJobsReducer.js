import { initialState } from "../store/store"
import { FETCH_CATEGORY_JOBS, FETCH_CATEGORY_JOBS_ERROR, FETCH_CATEGORY_JOBS_LOADING } from "../actions/actionTypes"


const categoryJobsReducer = (state = initialState.categoryJobs, action) => {
    
    switch(action.type){
        case FETCH_CATEGORY_JOBS: return {
            ...state,
                categoryJobsArray: action.payload
        }
        case FETCH_CATEGORY_JOBS_ERROR: return {
            ...state,
            error: action.payload
        }
        case FETCH_CATEGORY_JOBS_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        default: {
            return state
        }
    }
}

export default categoryJobsReducer