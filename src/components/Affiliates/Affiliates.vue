<template>
  <section class="affiliate" :id="bucket.name | lowercase">

    <h3 class="header">{{ bucket.name | capitalize }}</h3>

      <Affiliate
        v-for="affiliate in bucket.affiliates"
        :key="affiliate.id"
        :affiliate="affiliate"/>

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
  padding-top: 5em;
  margin-left: 2em;
}

.row {
  text-align: center;
}

</style>
