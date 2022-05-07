<template>
  <div class="container py-5">
    <NavTabs/>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestsNavPills
        :categories="categories"
    />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestCard 
        v-for="rest in restaurants"
        :key="rest.id"
        :initail-rest="rest"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->  
    <RestsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestCard from './../components/RestCard.vue'
import RestsNavPills from './../components/RestsNavPills.vue'
import RestsPagination from './../components/RestsPagination.vue'

import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'


export default {
	data(){
    return {
			restaurants: [],
			categories: [],
			categoryId: -1,
			currentPage: 1,
			totalPage: [],
			previousPage: -1,
			nextPage: -1
    }
  },
  components: {
    NavTabs,RestCard,RestsNavPills,RestsPagination
  },
  methods: {
    async fetchRestaurants ({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })
        // STEP 2：透過解構賦值，將所需要的資料從 response.data 取出
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data
        // STEP 3：將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next

				console.log(response)

				if  (response.statusText !== 'OK'){
					throw new Error(response.statusText)
				}

      } catch (error) {
        Toast.fire({
					icon: 'error',
					title: '無法取得餐廳資料，請稍後再試'
				})
      }
    }
	},
	created () {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
	},
	beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  }
}
</script>