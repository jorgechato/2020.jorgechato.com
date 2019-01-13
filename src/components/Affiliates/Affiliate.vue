<template>
  <section class="object">

    {{ affiliate.name }}

  </section>
</template>

<script>
export default {
  name: 'Affiliate',
  props: {
    affiliate: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
