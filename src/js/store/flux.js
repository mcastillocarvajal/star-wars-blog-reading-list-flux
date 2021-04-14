const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			token: null,
			user: [],
			id: "",
			favorite: [],
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
					await setStore({ user: data });
					const id = store.user["id"];
					setStore({ id: id });
					console.log(">>>>ID: ", store.id);
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
					const filter = data.filter(item => item.user_id == String(store.id));
					setStore({ favorite: filter });
					console.log(">>>>FAVORITES DATA: ", store.favorite);
				} catch (err) {
					console.error(">>>FAVORITES ERROR", err);
				}
			},
			addFavorite: async (name, category, user) => {
				const store = getStore();
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						name: name,
						category: category,
						user_id: user
					})
				};
				try {
					const resp = await fetch(
						"https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/favorite",
						opts
					);
					if (resp.status != 200) {
						alert("ADD ERROR");
					}
					const data = await resp.json();
					const filter = data.filter(item => item.user_id == String(store.id));
					setStore({ favorite: filter });
					console.log(">>>>addFavorite", store.favorite);
				} catch (err) {
					console.error(">>>ADD ERROR", err);
				}
			},
			deleteFavorite: async id => {
				const store = getStore();
				const opts = {
					method: "DELETE",
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				try {
					const resp = await fetch(
						"https://3000-moccasin-dinosaur-8dclvd36.ws-us03.gitpod.io/favorite/" + `${id}`,
						opts
					);
					if (resp.status != 200) {
						alert("DELETE ERROR");
					}
					const filter = store.favorite.filter(item => item.id != id);
					setStore({ favorite: filter });
					console.log(">>>>deleteFavorite", store.favorite);
				} catch (err) {
					console.error(">>>DELETE ERROR", err);
				}
			},
			getSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			Logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null });
				setStore({ user: [] });
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
				return item;
			},
			handleOnFocus: () => {
				console.log("Focused");
			}
		}
	};
};

export default getState;
