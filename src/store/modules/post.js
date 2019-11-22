export default {
    actions: {
        async fetchPosts(context, limit = 3) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            const posts = await response.json();
            context.commit('updatePosts', posts)
        }
    },
    mutations: { //мутации ИЗМЕНЯЮТ значения свойств в state, путем указания стейта, данных, передаваемых из компонента, который совершает мутацию, способа мутации(тело мутатора)
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        },
        revertPosts(state) {
            state.posts = state.posts.reverse()
        },
        deletePosts(state, answer) {
            (answer.start <= state.posts.length) ? state.posts.splice(answer.start - 1, answer.count) : alert(`Can't do it!`)
        }
    },
    state: { //какие-нибудь переменные, которые нам нужны где-нибудь
        posts: []
    },
    getters: { //тут можно получить доступ к данным, возвращаемые значения будут указаны в вычисляемых свойствах в компонентах
        // allPosts(state) {
        //     return state.posts
        // },
        postsCount(state, getters) {
            return getters.validPosts.length
        },
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        }
    },
}