import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadVehicles();
    }, []);

    return (
        <div className="container">
            <h1>Star Wars Vehicles</h1>
            <div className="row">
                {store.vehicles.map((vehicle) => (
                    <Card key={vehicle.uid} data={vehicle} />
                ))}
            </div>
        </div>
    );
};
