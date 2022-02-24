<template>
<div>
  <b-container class="bg-white mt-2 rounded border border-white" fluid="lg">
      <app-content></app-content>
  </b-container>
</div>
</template>

<script>
import AppContent from './components/AppContent.vue'
/* eslint-disable */

export default {
  name: 'App',
  components: { AppContent },
}
  </script>

<style lang="scss">
</style>
