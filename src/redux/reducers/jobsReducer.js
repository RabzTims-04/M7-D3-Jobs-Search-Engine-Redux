import { initialState } from "../store/store"
import { FETCH_JOBS, FETCH_JOBS_ERROR } from "../actions/actionTypes"


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
        default: {
            return state
        }
    }
}

export default jobsReducer