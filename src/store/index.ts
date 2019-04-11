import Vue from 'vue';
import Vuex from 'vuex';
import { Cart } from '@/store/interfaces';

Vue.use(Vuex);

export interface State {
    cart: Cart;
}

export default new Vuex.Store<State>({});
