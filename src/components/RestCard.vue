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
          :disable="isProcessing"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          :disable="isProcessing"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          :disable="isProcessing"
          @click.stop.prevent="deleteLike"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          :disable="isProcessing"
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
      restaurant: this.initailRest,
      isProcessing: false,
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFavorite({ restaurantId })
        if (data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true
        }
        this.isProcessing = true
      } catch (error){
        this.isProcessing = true
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
    async addLike (restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.addLike({ restaurantId })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async deleteLike (restaurantId) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.deleteLike({
          restaurantId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法取消按讚，請稍後再試'
        })
      }
    }
  },
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>