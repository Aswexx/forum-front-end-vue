<template>
  <div id="rest-forum">
    <NavBar/>
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view/>
    </main>
  </div>
</template>

<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'

  import NavBar from './components/NavBar.vue'
  export default {
    components: {
      NavBar
    },
  }
</script>

