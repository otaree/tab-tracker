<template>
  <v-layout class="mt-4">
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field required :rules="[required]" label="title" v-model="song.title"></v-text-field>
        <v-text-field required :rules="[required]" label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field required :rules="[required]" label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field required :rules="[required]" label="Album" v-model="song.album"></v-text-field>
        <v-text-field required :rules="[required]" label="Album Image Url" v-model="song.albumImage"></v-text-field>
        <v-text-field required :rules="[required]" label="Youtube ID" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
       <panel title="Song Structure" class="ml-2">
        <v-textarea required :rules="[required]" muti-line label="Lyrics" v-model="song.lyrics"></v-textarea>
        <v-textarea required :rules="[required]" muti-line label="Tab" v-model="song.tab"></v-textarea>
      </panel>

      <div class="danger-alert" v-if="error">
        {{ error }}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="create"
      >
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
