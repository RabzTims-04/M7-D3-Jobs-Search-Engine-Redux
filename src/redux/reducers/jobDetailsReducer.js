import { initialState } from "../store/store"
import { JOB_DETAILS_ADDED } from "../actions/actionTypes"


const jobDetailsReducer = (state = initialState.jobDetails, action) => {
    
    switch(action.type){
        case JOB_DETAILS_ADDED: return {
            ...state,
                details: action.payload
        }
        default: {
            return state
        }
    }
}

export default jobDetailsReducer