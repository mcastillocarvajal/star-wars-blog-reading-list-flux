const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			token: null,
			user: [],
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
			getUser: async () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				try {
					const resp = await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/user", opts);
					const data = await resp.json();
					console.log(">>>>USER DATA: ", data);
					setStore({ user: data });
				} catch (err) {
					console.error(">>>LOGIN ERROR", err);
				}
			},
			getFavorites: async () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				try {
					const resp = await fetch(
						"https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/favorite",
						opts
					);
					const data = await resp.json();
					console.log(">>>>FAVORITE DATA: ", data);
				} catch (err) {
					console.error(">>>FAVORITE ERROR", err);
				}
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
			getSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			Logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null });
			},
			Login: async (email, password) => {
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
				try {
					const resp = await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/login", opts);
					if (resp.status != 200) {
						alert("Invalid email or password");
						return false;
					}
					const data = await resp.json();
					console.log(">>>>LOGIN DATA: ", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch (err) {
					console.error(">>>LOGIN ERROR", err);
				}
			},
			Register: async (username, email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						email: email,
						password: password
					})
				};
				try {
					const resp = await fetch("https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/user", opts);
					if (resp.status != 200) {
						// alert("Invalid email or password");
						return false;
					}
					const data = await resp.json();
					console.log(">>>>REGISTER DATA: ", data);
					return true;
				} catch (err) {
					console.error(">>>REGISTER ERROR", err);
				}
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
