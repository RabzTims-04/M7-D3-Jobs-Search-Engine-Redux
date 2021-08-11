import { initialState } from "../store/store"


const mainReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "ADD_TO_FAVOURITES" : 
        let companyInFavourites = state.favourites.companies.findIndex((c) => c.id === action.payload.id)
        let newCompanies = [...state.favourites.companies]
        if(companyInFavourites === -1){
            newCompanies.push(action.payload)
        }else{
            alert("already in favourites")
        }
        return {
            ...state,
            favourites:{
                ...state.favourites,
                companies: newCompanies
            }      
        }
        case "REMOVE_FROM_FAVOURITES" : return {
            ...state,
            favourites:{
                ...state.favourites,
                companies: state.favourites.companies.filter((company, i) => i !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default mainReducer