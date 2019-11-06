<template>
  <div id="app">
    <PostForm />
    <h1>{{postsCount}}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'app',
  components: {
    PostForm,
  },
  computed: mapGetters(["validPosts","postsCount"]),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts()
  }
}
</script>

<style>
#app {
  margin: 60px auto;
  width: 400px;
  text-align: center;
}
.post {
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
