<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Users</h2>
    <ul>
      <li v-for="user in allUsers">User#{{ user.id }} (<a :href="`mailto:${user.email}`">{{ user.email }})</a></li>
    </ul>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="link in links"><a :href="link.url" target="_blank">{{ link.text }}</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import { ALL_USERS_QUERY } from '../constants/graphql'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      links: [
        { text: 'Core Docs', url: 'https://vuejs.org' },
        { text: 'Forum', url: 'https://forum.vuejs.org' },
        { text: 'Community Chat', url: 'https://chat.vuejs.org' },
        { text: 'Twitter', url: 'https://twitter.com/vuejs' }
      ]
    }
  },
  apollo: {
    allUsers: {
      query: ALL_USERS_QUERY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
