
export const addToFavouritesAction = (company) => ({
    type: "ADD_TO_FAVOURITES",
    payload: company
})

export const removeFromFavouritesAction = (company) => ({
    type: "REMOVE_FROM_FAVOURITES",
    payload: company
})

export const addJobDetails = (job) => ({
    type: "JOB_DETAILS_ADDED",
    payload: job
})