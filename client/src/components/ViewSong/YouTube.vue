<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="600"
      :player-height="236"
    >
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel.vue'

export default {
  props: ['youtubeId'],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
