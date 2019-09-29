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
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import addition from '@/modules/addition'

@Component
export default class Calculation extends Vue {
  leftInput: number = 0
  rightInput: number = 0
  answer: number = 0
  execCalc (): void {
    this.answer = addition(this.leftInput, this.rightInput)
  }
}
</script>
