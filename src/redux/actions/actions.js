import * as actionTypes from "./actionTypes"

export const addToFavouritesAction = (company) => ({
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: company
})

export const removeFromFavouritesAction = (company) => ({
    type: actionTypes.REMOVE_FROM_FAVOURITES,
    payload: company
})

export const addJobDetails = (job) => ({
    type: actionTypes.JOB_DETAILS_ADDED,
    payload: job
})

export const fetchCompaniesAction = (event, companySearch) => {
    return async (dispatch, getState) => {
        if(event.key === "Enter"){
            event.preventDefault()
            try {
            dispatch({
                type: actionTypes.FETCH_COMPANIES_LOADING,
                payload: true
            })
            const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=${companySearch}`) 
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_COMPANIES,
                    payload: data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching companies");
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_COMPANIES_ERROR,
                payload: true
            })
        }
    }
    }
}

export const fetchJobsAction = (event, jobSearch) => {
    return async (dispatch, getState) => {
        if(event.key === "Enter"){
            event.preventDefault()
            try {
            dispatch({
                type: actionTypes.FETCH_JOBS_LOADING,
                payload: true
            })
            const response = await fetch(`https://remotive.io/api/remote-jobs?search=${jobSearch}`) 
            const data = await response.json()
            console.log(data);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_JOBS_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_JOBS,
                    payload: data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_JOBS_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching jobs");
                dispatch({
                    type: actionTypes.FETCH_JOBS_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_JOBS_ERROR,
                payload: true
            })
        }
    }
    }
}

export const fetchCategoriesAction = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_CATEGORIES_LOADING,
                payload: true
            })
            const response = await fetch(`https://remotive.io/api/remote-jobs/categories`) 
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES,
                    payload: data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_ERROR,
                    payload: false
                })
                console.log(getState());
            }
            else{
                console.log("error fetching categories");
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_CATEGORIES_ERROR,
                payload: true
            })
        }
    }
}

export const fetchCategoryJobsAction = (categorySearch) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_CATEGORY_JOBS_LOADING,
                payload: true
            })
            const response = await fetch(`https://remotive.io/api/remote-jobs?category=${categorySearch}`)
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS,
                    payload: data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching category jobs");
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                    payload: true
                })
            }
        }catch (error){
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                payload: true
            })
        }
    }
}