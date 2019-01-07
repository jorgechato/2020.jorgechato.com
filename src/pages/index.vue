<template>
  <section>

    <Buckets />

    <div class="container">
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

export default {
  components: {
    Buckets
  }
}
</script>

<style lang="scss" scoped>

.container {
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
