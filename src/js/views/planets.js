import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets();
    }, []);

    return (
        <div className="container">
            <h1>Star Wars Planets</h1>
            <div className="row">
                {store.planets.map((planet) => (
                    <Card key={planet.uid} data={planet} />
                ))}
            </div>
        </div>
    );
};
