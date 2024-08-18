import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css"; 



export const Single = () => {
    const { uid, type } = useParams();
    const [details, setDetails] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const apiUrl = `https://swapi.tech/api/${type}/${uid}`;
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error(`Failed to fetch details: ${response.statusText}`);

                const data = await response.json();
                if (!data.result || !data.result.properties) {
                    throw new Error("Unexpected API response format");
                }

                setDetails(data.result.properties);

                // Construir la URL de la imagen
                const imageUrl =
                    type === "people"
                        ? `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`
                        : type === "planets"
                        ? `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                        : type === "vehicles"
                        ? `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`
                        : "https://via.placeholder.com/150";

                setImageUrl(imageUrl);
            } catch (error) {
                console.error("Error fetching details:", error);
                setError("Failed to load details.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [uid, type]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            {details ? (
                <div>
                    <img src={imageUrl} alt={details.name} className="img-fluid mb-3" onError={(e) => e.target.src = "https://via.placeholder.com/800x600"} />
                    <h1>{details.name || "Detail"}</h1>
                    {Object.entries(details).map(([key, value]) => (
                        <p key={key}>{`${key}: ${value}`}</p>
                    ))}
                </div>
            ) : (
                <p>No details available.</p>
            )}
        </div>
    );
};
