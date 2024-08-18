import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesList } from "./favoritesList";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);
    const [showFavorites, setShowFavorites] = useState(false);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/" className="navbar-brand mb-0 h1">Star Wars Blog</Link>
            <div className="ml-auto position-relative">
                <button 
                    className="btn btn-warning" 
                    onClick={() => setShowFavorites(!showFavorites)}
                >
                    Favorites ({store.favorites.length})
                </button>
                {showFavorites && <FavoritesList />}
            </div>
        </nav>
    );
};
