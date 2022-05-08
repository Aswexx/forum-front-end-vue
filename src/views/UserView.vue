<template>
  <div>
    <NavBar/>
    <br>
    <div class="container">
      <UserProfileCard
        :user='user'
        :is-current-user="currentUser.id === user.id"
        :initial-is-followed="user.isFollowed"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard
            :followings='user.Followings'
          />
          <br>
          <UserFollowsCard
            :followers='user.Followers'
          />
        </div>
        <div class="col-md-8">
            <UserCommentsCard
              :commentRests='user.Comments'
            />
            <br>
            <UserFavRestsCard
              :favRests='user.FavoritedRestaurants'
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './../components/NavBar.vue'
import UserProfileCard from './../components/UserProfileCard.vue'
import UserFollowingsCard from './../components/UserFollowingsCard.vue'
import UserFollowsCard from './../components/UserFollowsCard.vue'
import UserCommentsCard from './../components/UserCommentsCard.vue'
import UserFavRestsCard from './../components/UserFavRestsCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'



export default {
  data(){
    return {
      user: {},
    }
  },
  components: {
    NavBar,
    UserProfileCard,
    UserFollowingsCard,
    UserFollowsCard,
    UserCommentsCard,
    UserFavRestsCard
  },
  methods: {
    async fetchUser(userID){
      try {
        const {data,statusText} = await usersAPI.get(userID)
        const { profile, isFollowed } = data

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.user = {
          ...this.user,
          id: profile.id,
          image: profile.image,
          name: profile.name,
          email: profile.email,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
          isFollowed: isFollowed,
          Followings: profile.Followings,
          Followers: profile.Followers,
          FavoritedRestaurants: profile.FavoritedRestaurants,
          Comments: profile.Comments.filter(comment => comment.Restaurant)
        }
        
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '錯誤，請重新嘗試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created(){
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  }
}
</script>