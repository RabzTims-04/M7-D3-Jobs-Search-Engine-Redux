
export const addToFavouritesAction = (company) => ({
    type: "ADD_TO_FAVOURITES",
    payload: company
})

export const removeFromFavouritesAction = (index) => ({
    type: "REMOVE_FROM_FAVOURITES",
    payload: index
})