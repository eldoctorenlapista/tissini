<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col
        lg="4"
        md="6"
        sm="6"
      >
        <v-card
          class="mx-auto mb-2 mt-12"
          tile
          flat
        >
          <v-img
            src="../assets/productos-de-entrega-inmediata.png"
          ></v-img>
          <button class="BtnVerMas">VER MÁS</button>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col
        lg="4"
        md="6"
        sm="6"
      >
        <v-subheader light class="SubHeader pl-0">LÍNEAS</v-subheader>
        <v-card
          v-for="(category, index) in categories" :key="index"
          class="mx-auto mb-2"
          flat
        >
          <router-link :to="{ name: 'Catalog', params: { catalogId: category.id }}">
            <v-img
              :src="'https://api.tissini.app'+category.image"
            ></v-img>
          </router-link>
          <button class="BtnVerMas">VER MÁS</button>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col
        lg="4"
        md="6"
        sm="6"
      >
        <div v-for="(section, index) in sections" :key="index">
          <v-card
            class="mx-auto mb-2"
            flat
          >
            <v-img
              :src="'https://api.tissini.app'+section.image"
            ></v-img>
          </v-card>
          <v-row justify="center">
            <v-col
              lg="6"
              md="6"
              sm="6"
              cols="6"
              v-for="(product, indexb) in section.products" :key="indexb"
            >
              <v-card>
                <v-img :src="'https://api.tissini.app'+product.image.url" />
                <v-card-title class="VCardTitle pt-1 pb-2">{{product.name}}</v-card-title>
                <v-card-subtitle class="VCardSubTitle pb-0">{{product.categories.name}}</v-card-subtitle>
                <v-card-text class="VCardText pb-2">${{product.price}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
  .SubHeader{
    font-size: 1.4em !important;
    color: #9e9e9e !important;
  }
  .BtnVerMas{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 10px;
    color: white;
    background: black;
    font-size: 14px;
    border-radius: 25px !important;
    font-weight: 600;
  }
  .VCardTitle{
    font-size: 0.8rem !important;
    text-transform: uppercase;
    font-weight: 600 !important;
    display: block !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .VCardSubTitle{
    font-size: 0.8rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .VCardText{
    color: #ee44aa !important;
    font-weight: 700 !important;
  }
</style>

<script>
import axios from 'axios'
export default {
  name: 'Category',
  data () {
    return {
      categories: [],
      sections: []
    }
  },
  mounted () {
    const self = this
    axios.get('https://api.tissini.app/api/v2/categories')
      .then(function (res) {
        self.categories = res.data
      }).catch(function (err) {
        console.log(err)
      })

    axios.get('https://api.tissini.app/api/v1/categories/sections')
      .then(function (res) {
        self.sections = res.data
      }).catch(function (err) {
        console.log(err)
      })
  }
}
</script>
