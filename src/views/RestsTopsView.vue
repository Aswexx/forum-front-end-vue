<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for='rest in topRests'
      :key='rest.id'
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src='rest.image'
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{rest.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{rest.FavoriteCount}}</span>
            <p class="card-text">
              {{rest.description}}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{name: 'rest', params:{id: rest.id}}"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent='cancelFav(rest.id)'
              v-if='rest.isFavorited'
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent='addFav(rest.id)'
              v-else
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


import NavTabs from './../components/NavTabs.vue'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'

export default {
  data(){
    return {
      topRests:{}
    }
  },
  components: {
    NavTabs
  },
  methods: {
    async addFav(restaurantId){
      try {
        const {data} = await usersAPI.addFavorite({restaurantId})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        console.log(data)
        this.topRests.forEach(e => {
          if (e.id === restaurantId){
            e.FavoriteCount += 1
            e.isFavorited = true
          }
        })

      } catch (error){
        Toast.fire({
          icon: 'error',
          title: '請稍後再試'
        })
      }
    },
    async cancelFav(restaurantId){
      try {
        const {data} = await usersAPI.deleteFavorite({restaurantId})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.topRests.forEach(e => {
          if (e.id === restaurantId){
            e.FavoriteCount -= 1
            e.isFavorited = false
          }
        })

      } catch (error){
        Toast.fire({
          icon: 'error',
          title: '請稍後再試'
        })
      }
    },
    async fetchTopRestaurants(){
      try {
        const {data} = await restaurantsAPI.getTopRestaurants()
        console.log(data)

        this.topRests = data.restaurants
      } catch (error){
        Toast.fire({
          icon: 'error',
          title: '錯誤，請稍後再試'
        })
      }
    }
  },
  created(){
    this.fetchTopRestaurants()
  }
}
</script>