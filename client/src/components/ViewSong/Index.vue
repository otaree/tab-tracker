<template>
<div>
  <v-layout class="mt-5 mr-2 ml-2">
    <v-flex xs6>
      <song-metadata :song="song"></song-metadata>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>

  <v-layout class="mt-2 mr-2 ml-2">
    <v-flex xs6>
      <tab :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>

</div>
</template>

<script>
import { mapState } from 'vuex'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from './SongMetadata.vue'
import YouTube from './YouTube.vue'
import Lyrics from './Lyrics.vue'
import Tab from './Tab.vue'

export default {
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.route.params.songId
    const song = (await SongsService.show(songId)).data
    this.song = song

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  }
}

</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 400px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
