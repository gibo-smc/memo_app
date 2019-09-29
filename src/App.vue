<template lang="pug">
#app
  h1
    | 非VueCLI製 SPA w/Typescript!!!
  Calculation
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Calculation from '@/components/Calculation.vue'

@Component({
  components: {
    Calculation,
  },
})
export default class App extends Vue {
}
</script>

<style lang="sass">
.msg
  color: red
  display: flex
  justify-content: center
  align-items: center
</style>
