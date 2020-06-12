<template>
  <div>
    <v-app-bar
      color="grey lighten-5 accent-4"
      dense
      fixed
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
      <v-btn value="Category" @click="goToCategories">
        <span class="TabText">Categorias</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn value="Catalog">
        <span class="TabText">Catalogo</span>
        <v-icon>{{ icons.mdiBadgeAccountOutline }}</v-icon>
      </v-btn>

      <v-btn value="Cart" @click="goToCart">
        <span class="TabText">Carrito</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style>
  .ToolbarTitle{
    color: #ee44aa;
  }
  .TabText{
    letter-spacing: 0px;
    font-size: 14px;
    margin-top: 2px;
  }
</style>

<script>
import { mdiBadgeAccountOutline, mdiExitToApp } from '@mdi/js'
export default {
  name: 'Main',
  data () {
    return {
      icons: {
        mdiBadgeAccountOutline,
        mdiExitToApp
      }
    }
  },
  computed: {
    bottomNav: {
      get () {
        return this.$route.name
      },
      set () {
        this.routeName = this.$route.name
      }
    }
  },
  methods: {
    goToCart () {
      this.$router.push('/cart')
    },
    goToCategories () {
      this.$router.push('/categories')
    }
  }
}
</script>
