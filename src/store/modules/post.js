export default {
    actions: {
        async fetchPosts(context, limit = 3) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            const posts = await response.json();

            context.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
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