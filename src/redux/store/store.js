import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import categoriesReducer from "../reducers/categoriesReducer"
import categoryJobsReducer from "../reducers/categoryJobsReducer"
import companiesReducer from "../reducers/companiesReducer"
import favouritesReducer from "../reducers/favouritesReducer"
import jobDetailsReducer from "../reducers/jobDetailsReducer"
import jobsReducer from "../reducers/jobsReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 export const initialState = {
     favourites:{
         companies:[]
     },
     jobDetails:{
         details:{}
     },
     companies:{
         companiesArray:[],
         error: false,
         isLoading: false
     },
     jobs:{
         jobsArray:[],
         error: false,
         isLoading: false
     },
     categories:{
         categoriesArray:[],
         error: false,
         isLoading: false
     },
     categoryJobs:{
        categoryJobsArray:[],
        error: false,
        isLoading: false
     }
 }

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    jobDetails: jobDetailsReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    categories: categoriesReducer,
    categoryJobs: categoryJobsReducer
})

 export const configureStore = createStore(
     mainReducer,
     initialState,
     composeEnhancers(applyMiddleware(thunk))
 )