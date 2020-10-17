import Vue from 'vue';
import Vuex from 'vuex';
import datasource from '../datasource';

Vue.use(Vuex);
const ListAnime = datasource.getListAnime();
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