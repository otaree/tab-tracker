<template>
  <v-toolbar fixed color="cyan" dark>
    <v-toolbar-title class="white--text">
      <span class="home" @click="nevigateTo({ name: 'root' })">TabTracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
       <v-btn  flat dark @click="nevigateTo({ name: 'songs' })">
          Browse
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="nevigateTo({ name: 'login'})">
          Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="nevigateTo({ name: 'register'})">
          Sign Up
        </v-btn>
    </v-toolbar-items>

     <v-toolbar-items>
        <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
          Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    nevigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}

</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
