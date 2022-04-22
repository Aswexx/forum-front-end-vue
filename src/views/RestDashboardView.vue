<template>
  <div class="container py-5">
    <div>
      <h1>{{ rest.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ rest.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ commentsLength }} </li>
      <li>瀏覽次數： {{ rest.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Miss Jeffry Mraz",
        "tel": "298-944-4949 x90103",
        "address": "0828 Will Terrace",
        "opening_hours": "08:00",
        "description": "et sunt at",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.73736295882817",
        "viewCounts": 0,
        "createdAt": "2022-04-18T10:28:21.000Z",
        "updatedAt": "2022-04-18T10:28:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Aut facilis dicta culpa.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T10:28:21.000Z",
                    "updatedAt": "2022-04-18T10:28:21.000Z"
                }
            },
            {
                "id": 51,
                "text": "Rerum officiis officiis doloremque voluptatem voluptas reiciendis.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$PRIgIlqUe4L.r0meKMY55Oli7tbcwamiB/eoVY4aClFyL7LWqU/yi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T10:28:21.000Z",
                    "updatedAt": "2022-04-18T10:28:21.000Z"
                }
            },
            {
                "id": 101,
                "text": "Quis consectetur dolores qui deserunt.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$PRIgIlqUe4L.r0meKMY55Oli7tbcwamiB/eoVY4aClFyL7LWqU/yi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-18T10:28:21.000Z",
                    "updatedAt": "2022-04-18T10:28:21.000Z"
                }
            }
        ]
    }
}
export default {
  data(){
    return {
      rest:{},
      commentsLength: 0
    }
  },
  created(){
    this.rest = dummyData.restaurant
    this.commentsLength = dummyData.restaurant.Comments.length
  }
}
</script>