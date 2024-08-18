import React from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./favoriteButton";

export const Card = ({ data, type }) => {
    const imageUrl = type === "people"
        ? `https://starwars-visualguide.com/assets/img/characters/${data.uid}.jpg`
        : type === "planets"
        ? `https://starwars-visualguide.com/assets/img/planets/${data.uid}.jpg`
        : type === "vehicles"
        ? `https://starwars-visualguide.com/assets/img/vehicles/${data.uid}.jpg`
        : "https://via.placeholder.com/150";

    return (
        <div className="col-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={data.name} />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/single/${type}/${data.uid}`}>
                            <button className="btn btn-primary">Learn more</button>
                        </Link>
                        <FavoriteButton item={data} type={type} />
                    </div>
                </div>
            </div>
        </div>
    );
};
