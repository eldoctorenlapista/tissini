<template>
  <div>
    <v-row justify="center">
      <v-col
        lg="4"
        md="6"
        sm="6"
      >
        <v-breadcrumbs class="mt-6 pb-0" divider=">" :items="items"></v-breadcrumbs>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <v-img
              :src="'https://api.tissini.app'+category.image"
            ></v-img>
          </swiper-slide>
          <div class="swiper-button-prev ArrowColor" slot="button-prev"></div>
          <div class="swiper-button-next ArrowColor" slot="button-next"></div>
        </swiper>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        lg="4"
        md="6"
        sm="6"
      >
        <v-subheader light class="SubHeader">PRODUCTOS</v-subheader>
        <v-card v-for="(product, index) in products" :key="index" class="mb-5">
          <v-carousel cycle hide-delimiter-background>
            <v-carousel-item
              v-for="(image,i) in product.images"
              :key="i"
              :src="'https://api.tissini.app'+image.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-card-actions>
            <v-btn
              text
              color="primary"
            >
              Agregar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              class="ButtonText"
            >
              ${{product.price}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
  .ArrowColor{
    color: #ee47ab;
  }
  .SubHeader{
    font-size: 1.4em !important;
    color: #9e9e9e !important;
  }
  .ButtonText{
    font-weight: 600;
  }
</style>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Catalog',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      categories: [],
      products: [],
      items: [],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    const self = this
    axios.get('https://api.tissini.app/api/v2/categories/' + this.$route.params.catalogId + '/products')
      .then(function (res) {
        self.categories = res.data.categories.categories
        self.products = res.data.products
        self.items = [
          {
            text: 'Categories',
            disabled: false,
            href: '../categories'
          },
          {
            text: res.data.categories.name,
            disabled: true
          }
        ]
      }).catch(function (err) {
        console.log(err)
      })
  }
}
</script>
