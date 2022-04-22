<template>
  <div class="container py-5">
    <NavTabs/>
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" 
        v-for="user in users"
        :key='user.id'>
        <a href="#">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent='cancelFollow(user)'
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent='follow(user)'
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
            "isAdmin": true,
            "image": 'https://www.likejapan.com/wp-content/uploads/2016/03/editors/382/20160301113920_qTELNhPE.jpg',
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPghpxK1nWM9aFOtQx0cxCVu_wCS8GV7rxMavylD0Nii1KobSlWyqSrFHk4UoCYg_ahl0&usqp=CAU',
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$PRIgIlqUe4L.r0meKMY55Oli7tbcwamiB/eoVY4aClFyL7LWqU/yi",
            "isAdmin": false,
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurVSyRPD_h5qpfmZ-3E38gDcBeJztDVR8y2atE21PzUNcYGPkNRg7ZARrpRq9BC2uGdM&usqp=CAU',
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

import NavTabs from './../components/NavTabs.vue'
export default {
  data(){
    return {
      users:[]
    }
  },
  components: {
    NavTabs
  },
  methods: {
    fetchUsers(){
      this.users = dummyData.users
    },
    follow(user){
      user.isFollowed = true
    },
    cancelFollow(user){
      user.isFollowed = false
    },
  },
  created(){
    this.fetchUsers()
  }
}
</script>