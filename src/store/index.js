import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import select from "./modules/select";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { //декомпозиция логики
        post,
        select
    }
})