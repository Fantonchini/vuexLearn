<template>
  <div id="app">
    <div>
      <a href="#" @click="setLocale('en')">en</a>
      <a href="#" @click="setLocale('ru')">ru</a>
    </div>
    <Languages />
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
import Languages from './components/languages'
export default {
  name: 'app',
  components: {
    PostForm,
    Languages,
  },
  computed: mapGetters(["validPosts","postsCount"]),
  methods: {
    ...mapActions(['fetchPosts']),
    setLocale(locale) {
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    },
  },
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
