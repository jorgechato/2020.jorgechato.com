<template>
  <section>

    <Buckets />

    <Todos :todos="todos"/>

    <div class="podcast__container">
      <iframe
        src="https://open.spotify.com/embed/show/6HPGljWQbxmnxqhWNNMUpX"
        width="100%"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>
    </div>


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
import Buckets from '~/components/Buckets/Buckets'
import Todos from '~/components/Todos'

export default {
  components: {
    Buckets,
    Todos,
  },
  data: () => ({
    todos: [
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
.podcast__container {
  text-align: center;
  width: 85%;
  margin: 2em auto 0 auto;
  max-width: 500px;
}

</style>
