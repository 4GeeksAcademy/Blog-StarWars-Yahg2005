import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoriteButton = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    if (!item || !item.uid) {
        console.error("Item o item.uid no está definido:", item);
        return null;
    }

    const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

    return (
        <i
            className={`fa${isFavorite ? 's' : 'r'} fa-heart`}
            style={{ cursor: "pointer", color: isFavorite ? "red" : "grey" }}
            onClick={() => isFavorite ? actions.removeFavorite(item.uid, type) : actions.addFavorite(item, type)}
            title={item.name} // Añadir nombre como título para ver fácilmente quién es el favorito
        ></i>
    );
};
