<template>
  <div id="app">
    <Select />
    <div>
      <a href="#" @click="setLocale('en')">en</a>
      <a href="#" @click="setLocale('ru')">ru</a>
    </div>
    <Languages />
    <PostForm />
    <button @click="reverse">Reverse posts!</button>
    <button @click="deletePost">Delete posts</button>
    <h1>{{postsCount}}</h1>
    <div class="post" v-for="(post, index) in validPosts" :key="index">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <p>Post number {{index + 1}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import PostForm from './components/PostForm'
import Languages from './components/languages'
import Select from './components/select'
export default {
  data() {
    return {
    }
  },
  name: 'app',
  components: {
    PostForm,
    Languages,
    Select,
  },
  computed: mapGetters(["validPosts","postsCount"]), //после импорта геттеров у нас есть вычисленные свойства-переменные, в которых лежат функции, вернувшие что-то в геттерах
  methods: {
    ...mapMutations(['revertPosts','deletePosts']),
    ...mapActions(['fetchPosts']),
    setLocale(locale) {
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    },
    reverse() {
      this.revertPosts()
    },
    deletePost() {
      if (this.postsCount <= 0) {
        alert(`Can't do it!`)
      } else {
        const answer = {}
        answer.start = Number(prompt('с кого начнем?', 1))
        answer.count = Number(prompt('сколько удалить?', 1))
        this.deletePosts(answer)
      }
    }
  },
  mounted() {
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
