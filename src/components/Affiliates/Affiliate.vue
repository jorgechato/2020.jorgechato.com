<template>
  <section class="item">

    <div class="object">
    {{ affiliate.name }}
    </div>

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

.item {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
}

.object {
  background: red;
  height: 250px;
}

@media only screen and (min-width: 600px) {
  .item {
    width: calc(50% - 2em);
    padding: 1em 1em;
  }
}

@media only screen and (min-width: 1000px) {
  .item {
    width: calc(33% - 2em);
    padding: 1em 1em;
  }
}

@media only screen and (min-width: 1500px) {
  .item {
    width: calc(25% - 2em);
    padding: 1em 1em;
  }
}

</style>
