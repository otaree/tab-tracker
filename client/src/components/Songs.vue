<template>
    <v-container grid-list-xl text-xs-center class="mt-4">
    <v-layout row wrap>
      <v-flex offset-md3 xs12 md6>
        <panel title="Songs">
          <template slot="action">
              <v-btn
                class="cyan accent-2"
                @click="navigateTo({ name: 'songs-create' })"
                light
                medium
                absolute
                right
                middle
                fab>
                <v-icon>add</v-icon>
              </v-btn>
          </template>
          <div v-for="song in songs" :key="song.id" class="song">

            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>

                <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                  }})">
                  VIEW
                </v-btn>
              </v-flex>
              <v-flex xs6>
                <img :src="song.albumImage" class="album-image" >
              </v-flex>
            </v-layout>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel.vue'

export default {
  components: {
    Panel
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
