<template>
  <div class="container py-5">
    <!-- AdminNav Component -->

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin ? 'admin' : 'user'}}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="roleToggle(user.id)"
              v-if="user.id !== 1" 
            >
            <!-- 應該要是動態的，這邊先用 1 -->
              {{user.isAdmin ? 'set as user' : 'set as admin'}}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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

export default {
  data(){
    return {
      users:[]
    }
  },
  methods: {
    // roleToggle(id){
    //   this.users.forEach(user => {
    //     if(user.id === id) {
    //       user.isAdmin = !user.isAdmin
    //     }
    //   })
    // }
    roleToggle(id){
      this.users = this.users.map(user => {
        if (user.id === id){
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  },
  created(){
    this.users = dummyData.users
  },
}
</script>