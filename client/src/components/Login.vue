<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex   offset-md3 xs12 md6>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title >Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">

            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="password" type="password" v-model="password"></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="cyan" @click="login" dark>Login</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

</style>
