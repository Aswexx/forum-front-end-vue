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
const dummyData = {
    "restaurants": [
        {
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
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Mallory Barrows",
            "tel": "1-837-822-5515",
            "address": "476 Emmerich Drives",
            "opening_hours": "08:00",
            "description": "Ipsa sit rerum quibusdam eos quos eum illum. Aut c",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.30434373327225",
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
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Madison White",
            "tel": "(457) 954-8360 x114",
            "address": "040 Jarrod Route",
            "opening_hours": "08:00",
            "description": "Cumque dolor veritatis doloremque. Dolorem autem m",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.082148633968334",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Ms. Claude Pacocha",
            "tel": "805-803-3568",
            "address": "64270 O'Reilly Fort",
            "opening_hours": "08:00",
            "description": "Minus eveniet voluptas assumenda aliquam.\nIpsam sa",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.36191959412449",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Tristian Emmerich",
            "tel": "509.367.3572 x92878",
            "address": "773 Macejkovic Glen",
            "opening_hours": "08:00",
            "description": "Eveniet aut molestias.\nEnim perspiciatis rerum ius",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.4528726258481",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Isaac Reynolds",
            "tel": "562-905-7284",
            "address": "10658 Tiffany Views",
            "opening_hours": "08:00",
            "description": "Illum et odit temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.09265480341777",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Abelardo Steuber",
            "tel": "509-836-5281 x18861",
            "address": "796 Rosendo Falls",
            "opening_hours": "08:00",
            "description": "Quam facere molestiae id et perferendis aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.80306719283912",
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
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Bridgette Bradtke II",
            "tel": "(318) 867-8916 x8554",
            "address": "4555 Leannon Shore",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.86200952266308",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Eloisa Fritsch",
            "tel": "(694) 873-6615",
            "address": "6602 Ariane Vista",
            "opening_hours": "08:00",
            "description": "Rem voluptatem id voluptatem accusamus beatae at a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.367422341977775",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Lera Halvorson",
            "tel": "1-600-991-9647",
            "address": "248 Grady Parkway",
            "opening_hours": "08:00",
            "description": "Eligendi ullam molestias deleniti modi omnis volup",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.66584739630555",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

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
    fetchRests(){
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created(){
    this.fetchRests()
  }
}
</script>