<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{rest.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{rest.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        style="width: 250px;margin-bottom: 25px;"
        :src="rest.image"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{rest.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{rest.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{rest.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ rest.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{name: 'rest-dashboard', params: {id: rest.id}}"
      >Dashboard</router-link>

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="rest.isFavorited"
        @click.stop.prevent='cancelFav(rest)'
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.stop.prevent='addFav(rest)'
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if='rest.isLiked'
        @click.stop.prevent='cancelLike(rest)'
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.stop.prevent='addLike(rest)'
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  props:{
    rest: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addFav(rest){
      rest.isFavorited = true
    },
    cancelFav(rest){
      rest.isFavorited = false
    },
    addLike(rest){
      rest.isLiked = true
    },
    cancelLike(rest){
      rest.isLiked = false
    }
  }
}
</script>