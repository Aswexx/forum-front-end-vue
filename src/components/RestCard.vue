<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link 
            :to="{name: 'rest',params:{id: restaurant.id}}">
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">中式料理</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="addLike"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initailRest: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initailRest
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId })
        if (data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true
        }
      } catch (error){
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加到最愛，請稍後再試'
        })
        console.log('error',error)
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId })
        if (data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false
        }
      } catch (error){
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請收後再試'
        })
        console.log('error',error)
      }
    },
    addLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      }
    },
    deleteLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }
    }
  },
}
</script>