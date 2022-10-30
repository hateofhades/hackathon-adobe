import Vuex from "vuex";
import userStore from "./userStore";

const store = new Vuex.Store({
	state: {
		version: "1",
		API_URL: "http://localhost:5000"
	},
	getters: {
		API_URL: state => state.API_URL
	}
});
store.registerModule("userStore", userStore());

export default store;
