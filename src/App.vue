<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions('settings' , ['getSettings']),
    ...mapActions('auth' , ['handleAuthChange'])
  },
  mounted() {
    this.getSettings()
    this.handleAuthChange()
  }
}
</script>

<style >
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>