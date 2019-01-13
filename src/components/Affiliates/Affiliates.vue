<template>
  <section class="affiliate" :id="bucket.name | lowercase">

    <h3 class="header">{{ bucket.name | capitalize }}</h3>
    <Affiliate
      v-for="affiliate in bucket.affiliates"
      :key="affiliate.id"
      :affiliate="affiliate"/>

    <div class="test"></div>

  </section>
</template>

<script>
import Affiliate from '~/components/Affiliates/Affiliate'

export default {
  name: 'Affiliates',
  components: {
    Affiliate,
  },
  props: {
    bucket: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

.header {
  margin-left: 2em;
}

.test{
  height: 100vh;
}
</style>
