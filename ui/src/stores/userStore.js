export default function userStore() {
    const store = {
        namespaced: true,
        state: {
            user: null,
            token: null
        },
        getters: {
            user: state => state.user,
            token: state => state.token
        },
        mutations: {
            user(state, user) {
                state.user = user.info;
                state.token = user.token;
            }
        },
        actions: {
            async login(storeParam, { username, password }) {
                const response = await fetch(`${storeParam.rootState.API_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                });
                const user = await response.json();
                storeParam.commit("user", user);
            },
            async logout(storeParam) {
                storeParam.commit("user", null);
            },
            async register(storeParam, { username, password }) {
                const response = await fetch(`${storeParam.rootState.API_URL}/api/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                });
                const user = await response.json();
                storeParam.commit("user", user);
            }
        }
    };
    return store;
}