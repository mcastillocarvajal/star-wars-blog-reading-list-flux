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
				await fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({ people: data.results });
						console.log(data.results);
					})
					.catch(err => console.error(err));
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
						console.log(data.results);
					})
					.catch(err => console.error(err));
			},
			getStarships: async () => {
				await fetch("https://swapi.dev/api/starships/")
					.then(res => res.json())
					.then(data => {
						setStore({ starships: data.results });
						console.log(data.results);
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
