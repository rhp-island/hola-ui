<template>
  <div>Hola UI Vue v1</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    this.$nextTick(() => {
      this.$router.push('/h-alert/examples/base-alert')
    })
  }
})
</script>
