<template>
  <div class="container py-5">
    <form @submit.prevent='handleSubmit'>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          required
          :placeholder="user.name"
          v-model='editingName'
        >
      </div>

      <div class="form-group">

        <img
          class='d-block'
          width="200"
          height='200'
          :src='user.image'
        >

        <label for="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
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
      user: {},
      editingName:'',
    }
  },
  methods: {
    handleFileChange(e){
      const { files } = e.target
      if (!files.length){
        return 
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.user.image = imgURL
      }
    },
    handleSubmit(e){
      const form = e.target
      const formData = new FormData(form)
      formData.name = this.editingName
      for (let [name,value] of formData.entries()){
        console.log(`${name}: ${value}`)
      }
    }
  },
  created(){
    const users = dummyData.users
    this.user = users.find(e => e.id === 1)
  }
}
</script>