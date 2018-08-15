<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex offset-md3 xs12 md6>
        <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="password" autocomplete="new-password" type="password" v-model="password"></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="cyan" @click="register" dark>Register</v-btn>
          </form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel.vue'

export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
