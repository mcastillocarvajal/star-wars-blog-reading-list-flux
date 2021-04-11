const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			getPeople: async () => {
				await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/character")
					.then(res => res.json())
					.then(data => {
						setStore({ people: data });
					})
					.catch(err => console.error(err));
			},
			getPlanets: async () => {
				await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/planet")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data });
					})
					.catch(err => console.error(err));
			},
			// getFavorites: async () => {
			// 	await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/planet")
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			setStore({ planets: data });
			// 		})
			// 		.catch(err => console.error(err));
			// },
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
			handleLogin: (email, password) => {
				console.log("<<<<LOGIN IS WORKING");
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/login", opts)
					.then(res => {
						if (res.status === 200) return res.json();
						else alert("Invalid email or password");
					})
					.then()
					.catch(err => console.error(">>>LOGIN ERROR", err));
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
