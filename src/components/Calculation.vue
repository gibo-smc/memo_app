<template lang="pug">
div
  p
    input.left(type="text" v-model.number="leftInput")
    | &nbsp;+&nbsp;
    input.right(type="text" v-model.number="rightInput")
    | &nbsp;+&nbsp;
    span.answer
      | {{ answer }}
  p
    button.exec(@click="execCalc")
      | 足し算実行
</template>
<script>
import addition from '../modules/addition'
export default {
  name: 'Calculation',
  data () {
    return {
      leftInput: 0,
      rightInput: 0,
      answer: 0
    }
  },
  methods: {
    execCalc () {
      this.answer = addition(this.leftInput, this.rightInput)
    }
  }
}
</script>
