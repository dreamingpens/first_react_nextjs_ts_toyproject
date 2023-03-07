import classes from "./MeetupItem.module.css";
import React from 'react'
import Card from '../ui/Card'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.isFavoriteMeetupHandler(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.deleteFavoriteMeetupHandler(props.id);
        } else {
            favoritesCtx.addFavoriteMeetupHandler(props.meetup)
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </Card>

        </li>
    )
}

export default MeetupItem;