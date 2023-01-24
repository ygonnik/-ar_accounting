<template>
  <v-app>
    <NavBar/>
    <RouterView/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>
