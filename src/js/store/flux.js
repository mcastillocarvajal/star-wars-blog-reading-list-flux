const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
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
			addFavorite: item => {
				const store = getStore();
				const newFavorites = { name: item };
				setStore({ favorites: [...store.favorites].concat(newFavorites) });
				console.log("THIS IS THE OBJECT" + store.favorites);
			},
			deleteFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore([...favorites]);
			}
		}
	};
};

export default getState;
