import { createStore } from "redux"
import mainReducer from "../reducers/reducers"

 export const initialState = {
     favourites:{
         companies:[]
     },
     alert:{
         message:false
     },
     jobDetails:{
         details:{}
     }
 }

 export const configureStore = createStore(
     mainReducer,
     initialState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )