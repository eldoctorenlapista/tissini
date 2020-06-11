<template>
  <div>
    <p>Estas son las categorias</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Category',
  mounted () {
    axios.get('https://api.tissini.app/api/v2/categories')
      .then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
  }
}
</script>
