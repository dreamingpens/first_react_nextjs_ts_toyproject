import { Link } from 'react-router-dom'
import React from 'react'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'
import { useContext } from 'react'
function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/new'>New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
export default MainNavigation;