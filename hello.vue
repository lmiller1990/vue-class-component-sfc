<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: ['msg'] 
})
export default class Hello extends Vue {}
</script>