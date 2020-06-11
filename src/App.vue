<template>
  <v-app>
    <v-content>
      <router-view>
        <Login/>
      </router-view>
    </v-content>
  </v-app>
</template>

<style>
  #app{
    font-family: 'Raleway', sans-serif;
  }
</style>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>
