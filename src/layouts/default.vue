<template>
  <div>

    <Logo />

    <nuxt/>

    <Footer />

  </div>
</template>

<script>
import Logo from '~/components/Header/Logo'
import Footer from '~/components/Footer'

export default {
  components: {
    Logo,
    Footer,
  }
}
</script>

<style lang="scss">
$mainColor: #111;

body {
  color: white;
  font-family: "futura";
  background: $mainColor;
}
</style>
