import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPeople();
        actions.loadPlanets();
        actions.loadVehicles();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-danger">Characters</h2>
            <div className="row mb-4">
                {store.people.map((person) => (
                    <Card key={person.uid} data={person} type="people" />
                ))}
            </div>

            <h2 className="text-danger">Planets</h2>
            <div className="row mb-4">
                {store.planets.map((planet) => (
                    <Card key={planet.uid} data={planet} type="planets" />
                ))}
            </div>

            <h2 className="text-danger">Vehicles</h2>
            <div className="row mb-4">
                {store.vehicles.map((vehicle) => (
                    <Card key={vehicle.uid} data={vehicle} type="vehicles" />
                ))}
            </div>
        </div>
    );
};
