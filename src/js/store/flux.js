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
				await fetch("https://www.swapi.tech/api/people", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore(data.results);
						console.log(data.results);
					})
					.catch(err => {
						console.error(err);
					});
			},
			getPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore(data.results);
						console.log(data.results);
					})
					.catch(err => {
						console.error(err);
					});
			},
			getStarships: async () => {
				await fetch("https://www.swapi.tech/api/starships", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore(data.results);
						console.log(data.results);
					})
					.catch(err => {
						console.error(err);
					});
			}
		}
	};
};

export default getState;
