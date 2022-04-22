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
            <span class="badge badge-secondary">收藏數：0</span>
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
              @click.stop.prevent='cancelFav(rest)'
              v-if='rest.isFavorited'
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent='addFav(rest)'
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

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Angelica Haag",
            "tel": "720.046.1028",
            "address": "3034 Floyd Shores",
            "opening_hours": "08:00",
            "description": "amet",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.880438833530086",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Tatum Roberts",
            "tel": "858.786.9496",
            "address": "3329 Sporer Hills",
            "opening_hours": "08:00",
            "description": "Est qui aut ad natus. Quia pariatur similique sequ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.7351619659557125",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Helmer Little",
            "tel": "(300) 581-8451 x64865",
            "address": "0579 Stuart Freeway",
            "opening_hours": "08:00",
            "description": "Rerum aut illum nemo ea dolor ut. Vitae eveniet id",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.49470789216697",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Jevon Roberts",
            "tel": "105-647-2186 x90049",
            "address": "23710 Gracie Trail",
            "opening_hours": "08:00",
            "description": "Nisi impedit aut harum odit ut esse. Ullam aliquid",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.83442461689737",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Isaias Bashirian",
            "tel": "756-490-6622 x38643",
            "address": "7068 Bryce Trail",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.97838049318944",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Isabella Greenfelder",
            "tel": "091-863-0906 x7736",
            "address": "992 Brionna Port",
            "opening_hours": "08:00",
            "description": "consequatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.12019266512151",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Ayden Wehner",
            "tel": "1-065-113-4053",
            "address": "376 Fisher Village",
            "opening_hours": "08:00",
            "description": "veritatis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.994835044682024",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Clarabelle Spinka",
            "tel": "1-147-897-5244 x3729",
            "address": "886 Waters Dam",
            "opening_hours": "08:00",
            "description": "Facere porro ratione quod. Nihil unde quia porro a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.59169032138035",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Yolanda Schaefer",
            "tel": "1-428-949-1420",
            "address": "9672 Dietrich Crescent",
            "opening_hours": "08:00",
            "description": "Itaque non ut amet repudiandae. Ratione occaecati ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.88898577207898",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Dr. Emilie Collins",
            "tel": "392-093-5575",
            "address": "561 Loren Mountains",
            "opening_hours": "08:00",
            "description": "Architecto labore accusamus quaerat laborum conseq",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.15836522325839",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

import NavTabs from './../components/NavTabs.vue'
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
    addFav(rest){
      rest.isFavorited = true
    },
    cancelFav(rest){
      rest.isFavorited = false
    }
  },
  created(){
    this.topRests = dummyData.restaurants
  }
}
</script>