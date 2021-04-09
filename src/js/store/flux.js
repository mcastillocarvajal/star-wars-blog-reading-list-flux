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
					})
					.catch(err => console.error(err));
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			addFavorite: item => {
				const store = getStore();
				store.favorites.includes(item)
					? setStore({ favorites: [...store.favorites] })
					: setStore({ favorites: [...store.favorites, item] });
				localStorage.setItem("favorites", JSON.stringify(store.favorites));
				console.log(">>>>addFavorite", store.favorites);
			},
			deleteFavorite: index => {
				const store = getStore();
				const filter = store.favorites.filter(item => item != index);
				setStore({ favorites: filter });
				localStorage.setItem("favorites", JSON.stringify(store.favorites));
				console.log(">>>>deleteFavorite", store.favorites);
			},
			getLocalStorage: () => {
				const localData = localStorage.getItem("favorites");
				setStore({
					favorites: localData ? JSON.parse(localData) : null
				});
			},
			handleOnSearch: (string, results) => {
				console.log(string, results);
			},
			handleOnSelect: item => {
				console.log("<<<<<handleOnSelect", item);
			},
			handleOnFocus: () => {
				console.log("Focused");
			}
		}
	};
};

export default getState;
