<template>
  <section>

    <div
      class="articles"
      v-for="article in articles"
      :key="article.id">
      <div class="article" v-html="article"></div>
    </div>

  </section>
</template>

<script>
export default{
  name: 'Bucket',
  props: {
    articles: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
section{
  text-align: center;
  margin-top: 50px;
}
</style>
