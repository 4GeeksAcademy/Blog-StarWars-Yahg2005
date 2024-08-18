import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="favorites-list">
            {store.favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <ul className="list-group">
                    {store.favorites.map((fav, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {fav.name}
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => actions.removeFavorite(fav.uid, fav.type)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
