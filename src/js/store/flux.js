const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			getPeople: async () => {
				let response = await fetch("https://www.swapi.tech/api/people", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				let json = response.json();
				console.log({ people: json.results });
				setStore({ people: json.results });
			},
			getPlanets: async () => {
				let response = await fetch("https://www.swapi.tech/api/planets", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				let json = response.json();
				console.log({ planets: json.results });
				setStore({ planets: json.results });
			},
			getStarships: async () => {
				let response = await fetch("https://www.swapi.tech/api/starships", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				let json = response.json();
				console.log({ starships: json.results });
				setStore({ starships: json.results });
			}
		}
	};
};

export default getState;
