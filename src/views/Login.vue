<template>
  <div class="LoginContainer d-flex justify-center align-center">
    <form class="text-center" v-on:submit.prevent>
      <div class="pb-4 mt-12">
        <img src="../assets/mitienda.png" style="width: 60%">
      </div>
      <label class="LoginLabel">
        Ingresa el número de teléfono<br>
        de tu asesora independiente.
      </label>
      <v-text-field
        name="telefono"
        filled
        color="white"
        autocomplete="off"
        label="Teléfono"
        class="pt-6"
        v-model="mobilephone"
        v-on:keyup="login($event)"
      ></v-text-field>
      <v-progress-circular
        v-show="preloader"
        indeterminate
        color="white"
      ></v-progress-circular>
    </form>
    <v-snackbar
      v-model="snackbar"
    >
      {{ errorMessage }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Cerrar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<style>
  .LoginContainer{
    background: url('../assets/login-desktop.jpg');
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
  .LoginLabel{
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
  .v-input__slot{
    border:2px solid white;
  }
  .v-input__control>.v-input__slot:before {
    border-color: white !important;
  }
  .v-input input{
    font-size: 25px;
  }
  .v-input input, .v-label{
    color: white !important;
  }
  .v-application .primary--text{
    color: white !important;
    caret-color: white !important;
  }
</style>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      urlLogin: 'https://api.tissini.app/api/v1/login/client',
      mobilephone: '',
      errorMessage: '',
      snackbar: false,
      preloader: false
    }
  },
  methods: {
    login (e) {
      const length = e.target.value.length
      const self = this
      if (length >= 10) {
        self.preloader = true
        axios.post(this.urlLogin, {
          mobilephone: this.mobilephone
        }).then(function (res) {
          self.preloader = false
          self.$router.push('/categories')
        }).catch(function (error) {
          if (error.response.status) {
            self.errorMessage = 'El telefono digitado no se encuentra registrado en nuestra base de datos'
            self.snackbar = true
            self.preloader = false
          }
        })
      }
    }
  }
}
</script>
