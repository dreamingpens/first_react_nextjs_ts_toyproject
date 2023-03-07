import { createContext, useState } from 'react';
import React from 'react';
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavoriteMeetupHandler: (meetup) => { },
    deleteFavoriteMeetupHandler: (meetupId) => { },
    isFavoriteMeetupHandler: (meetupId) => { }

});



export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteMeetupHandler(meetup) {
        setUserFavorites((prev) => {
            return prev.concat(meetup);
        })
    }
    function deleteFavoriteMeetupHandler(meetupId) {
        setUserFavorites((prev) => {
            return prev.filter((meetup) => meetup.id !== meetupId)
        })
    }
    function isFavoriteMeetupHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavoriteMeetupHandler,
        deleteFavoriteMeetupHandler,
        isFavoriteMeetupHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;