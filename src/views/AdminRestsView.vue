<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <router-link
      :to="{name: 'admin-restaurant-new'}"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestsTable/>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestsTable from './../components/AdminRestsTable'

export default {
  components: {
    AdminNav,
    AdminRestsTable
  }
}
</script>