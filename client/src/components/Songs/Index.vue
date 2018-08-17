<template>
    <v-container grid-list-xl text-xs-center class="mt-4">
    <v-layout>
      <v-flex xs6 v-if="isUserLoggedIn">
        <songs-bookmarks />
        <recently-viwed-songs class="mt-2" />
      </v-flex>

      <v-flex :class="{xs12: !isUserLoggedIn, xs6: isUserLoggedIn}" class="ml-2">
        <songs-search-panel />
        <songs-panel class="mt-2" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViwedSongs from './RecentlyViwedSongs.vue'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViwedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
