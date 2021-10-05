import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { User: [{ id: 1, Name: "Ali", salary: 10000 }] };
const mutations = {
    AddUser(state, obj) {
        state.User.push(obj)
    }
};
const actions = {
    UserAddAct({ commit }, obj) {
        commit("AddUser", obj)
    }
};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})