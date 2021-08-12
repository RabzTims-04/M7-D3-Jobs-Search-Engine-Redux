import { initialState } from "../store/store"
import { FETCH_JOBS, FETCH_JOBS_ERROR, FETCH_JOBS_LOADING } from "../actions/actionTypes"


const jobsReducer = (state = initialState.jobs, action) => {
    
    switch(action.type){
        case FETCH_JOBS: return {
            ...state,
                jobsArray: action.payload
        }
        case FETCH_JOBS_ERROR: return {
            ...state,
            error: action.payload
        }
        case FETCH_JOBS_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        default: {
            return state
        }
    }
}

export default jobsReducer