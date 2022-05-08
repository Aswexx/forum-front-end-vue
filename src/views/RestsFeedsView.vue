<template>
  <div class="container py-5">
    <NavTabs/>

		<Spinner v-if="isLoading"/>
		<template v-else>

			<h1 class="mt-5">
				最新動態
			</h1>
			<hr>
			<div class="row">
				<div class="col-md-6">
					<h3>最新餐廳</h3>
					<!-- 最新餐廳 NewestRestaurants -->
					<NewestRests :rests="rests"/>
				</div>
				<div class="col-md-6">
					<!-- 最新評論 NewestComments-->
					<h3>最新評論</h3>
					<NewestComments :comments="comments"/>
				</div>
			</div>

		</template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRests from './../components/NewestRests.vue'
import NewestComments from './../components/NewestComments.vue'
import restaurantsAPI from './../apis/restaurants'
import Spinner from './../components/LoadingSpinner.vue'
import { Toast } from './../utils/helpers'
export default {
  data(){
    return {
      rests:[],
      comments:[],
      isLoading: true
    }
  },
  components: {
    NavTabs,NewestRests,NewestComments,Spinner
  },
  methods: {
    async fetchFeeds(){
			try {
				const { data, statusText } = await restaurantsAPI.getFeeds()
				const response = await restaurantsAPI.getFeeds()
				console.log(response)

				if (statusText !== 'OK') {
          throw new Error(statusText)
        }

				this.rests = data.restaurants
				this.comments = data.comments.filter(comment => comment.Restaurant)
				this.isLoading = false
			
			} catch(error) {
				this.isLoading = false
				Toast.fire({
					icon: 'error',
					title: '無法取得最新動態，請稍後再試'
				})
			}
    }
  },
  created(){
    this.fetchFeeds()
  }
}
</script>