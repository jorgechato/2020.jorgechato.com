<template>
  <section>

    <Buckets />

    <Articles :articles="articles"/>

    <div class="video__container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/kzFPp3WtL9M"
        frameborder="0"
        scrolling="no"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

  </section>
</template>

<script>
import Buckets from '~/components/Affiliates/Buckets'
import Articles from '~/components/Articles'

export default {
  components: {
    Buckets,
    Articles,
  },
  data: () => ({
    articles: [
      "hello world",
      "<i>foo</i>",
      "<b>foo</b>",
    ],
  }),
}
</script>

<style lang="scss" scoped>

.video__container {
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
