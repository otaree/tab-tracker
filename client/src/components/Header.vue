<template>
  <v-toolbar fixed color="cyan" dark>
    <v-toolbar-title class="white--text">
      <span class="home" @click="nevigateTo({ name: 'root' })">TabTracker</span>
    </v-toolbar-title>

    <!-- TODO: Implement -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat dark @click="nevigateTo({ name: 'register'})">
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
  export default {
    methods: {
      nevigateTo (route) {
        this.$router.push(route)
      }
    }
  }

</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  
}

</style>
