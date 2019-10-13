import Vue from 'vue';
import Vuex from 'vuex';
import ListAnime from './listAnime';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ListAnime,
        countAnime: 0,
    },
    getters: {
        getListAnime: state => {
            return state.ListAnime;
        },
        getCount: state => {
            return state.countAnime;
        },
    },
    mutations: {
        setListAnime(state, status) {
            state.ListAnime = status;
        },
        setCount(state, value) {
            state.countAnime = value;
        },
    },
    actions: {
        init({ commit }) {
            commit('setListAnime', ListAnime);
            commit('setCount', ListAnime.length);
        },
    },
});