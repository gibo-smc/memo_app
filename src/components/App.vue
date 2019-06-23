<template lang="pug">
#app
  h1
    | 非VueCLI製 SPA w/pug
  Calculation
</template>

<script>
import Calculation from './Calculation'
export default {
  name: 'App',
  components: {
    Calculation
  },
  data () {
    return {
      msg: 'goobye Vue CLI!!'
    }
  },
  methods: {
    changeMsg () {
      const newMsg = 'ES6で書いてみた'
      this.msg = newMsg
    }
  }
}
</script>

<style lang="sass">
.msg
  color: red
  display: flex
  justify-content: center
  align-items: center
</style>
