<template>
  <div>
    <v-app-bar
      color="grey lighten-5 accent-4"
      dense
    >
      <v-toolbar-title class="ToolbarTitle">Tissini</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="primary">
        <v-icon color="primary">mdi-phone</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon color="primary">{{ icons.mdiExitToApp }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-bottom-navigation
      app
      v-model="bottomNav"
      grow
      color="primary"
      flat
    >
      <v-btn value="recent" v-on:click="goToCategories">
        <span>Categorias</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn value="catalog" v-on:click="goToCatalog">
        <span>Catalogo</span>
        <v-icon>{{ icons.mdiBadgeAccountOutline }}</v-icon>
      </v-btn>

      <v-btn value="cart" v-on:click="goToCart">
        <span>Carrito</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style>
  .ToolbarTitle{
    color: #ee44aa;
  }
</style>

<script>
import axios from 'axios'
import { mdiBadgeAccountOutline, mdiExitToApp } from '@mdi/js'
export default {
  name: 'Main',
  data () {
    return {
      bottomNav: 'recent',
      icons: {
        mdiBadgeAccountOutline,
        mdiExitToApp
      }
    }
  },
  mounted () {
    axios.get('https://api.tissini.app/api/v2/categories')
      .then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    goToCart () {
      this.$router.push('/cart')
    },
    goToCatalog () {
      this.$router.push('/catalog')
    },
    goToCategories () {
      this.$router.push('/categories')
    }
  }
}
</script>
