<template>
  <div class="card">
    <div class="card-header">
      <strong>{{commentRests.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <span
        class="d-inline-block mx-1 my-1"
        v-for='rest in commentRests'
        :key='rest.id'
      >
        <router-link 
          :to="{name: 'rest',params: {id: rest.id}}"
        >
          <img :src="rest.Restaurant.image" width="60" height="60" class="avatar">
        </router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentRests: {
      type: Array,
      required: true
    }
  }
}
</script>