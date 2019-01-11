<template>
  <nuxt-link :to="'/'" class="logo">

    <div class="logo__top">
    J<spam class="circle"></spam>RGE
    </div>

    <div class="logo__bottom front">
    CH
    </div>

    <Parallax :thumbnail="thumbnail" class="logo__bottom">
    <p slot="content">{{ info | capitalize }}</p>
    </Parallax>

    <div class="logo__bottom front">
    T<spam class="circle"></spam>
    </div>

  </nuxt-link>
</template>

<script>
import Parallax from '~/components/Logo/Parallax'

export default {
  name: 'Logo',
  components: {
    Parallax
  },
  data: () => ({
    thumbnail: "http://www.technocrazed.com/wp-content/uploads/2015/12/Japan-wallpaper-20.jpg",
    info: "Tokio",
    //thumbnail: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lastminute.com%2Fhotels%2Fimg%2Fcity%2FZaragoza-ES.jpg&f=1",
    //info: "Zaragoza",
  }),
}
</script>

<style lang="scss" scoped>

.logo {
  margin: .5em auto .6em auto;
  font-family: "futura-bold";
  text-align: center;
  font-size: 5em;
  display: block;
  text-decoration: none;
  color: white;
  width: 400px;

  .circle {
    width: .8em;
    height: .8em;
    padding: 0;
    font-size: 1em;
    border-radius: 50%;
    background: white;
    display: inline-block;
  }

  .location {
    font-size: .15em;
    color: grey;
  }

  .logo__top {
    font-size: 1.1em;
    margin-bottom: -15px;
  }

  .logo__bottom {
    vertical-align: middle;
    display: inline-block;
  }

  .front {
    position: relative;
    z-index: 1;
  }
}

</style>
