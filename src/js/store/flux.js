const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            loadPeople: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/people");
                    if (!response.ok) throw new Error("Error fetching people");
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error loading people:", error);
                }
            },
            loadPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/planets");
                    if (!response.ok) throw new Error("Error fetching planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error loading planets:", error);
                }
            },
            loadVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/vehicles");
                    if (!response.ok) throw new Error("Error fetching vehicles");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error loading vehicles:", error);
                }
            },
            addFavorite: (item, type) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid && fav.type === type)) {
                    setStore({ favorites: [...store.favorites, { ...item, type }] });
                }
            },
            removeFavorite: (uid, type) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid || fav.type !== type) });
            }
        }
    };
};

export default getState;
