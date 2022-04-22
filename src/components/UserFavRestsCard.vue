<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favRests.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <span
        class="d-inline-block mx-1 my-1"
        v-for='favRest in favRests'
        :key='favRest.id'
      >
        <router-link 
          :to="{name: 'rest', params:{id: favRest.id}}"
        >
          <img :src="favRest.image" width="60" height="60" class="avatar">
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favRests: {
      type: Array,
      required: true,
    }
  }
}
</script>