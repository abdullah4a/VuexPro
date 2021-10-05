import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    Users = [
        { id: 1, name: "rando User", title: "Programme0" }
    ]
};
const mutations = {};
const actions = {

};
const getters = {};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})