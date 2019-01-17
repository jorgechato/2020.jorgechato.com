<template>
  <div>

    <Nav />

    <Logo />

    <nuxt/>

    <Footer />

  </div>
</template>

<script>
import Logo from '~/components/Header/Logo'
import Nav from '~/components/Header/Nav'
import Footer from '~/components/Footer'

export default {
  components: {
    Logo,
    Nav,
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

a {
  text-decoration: none;
  color: white;
  transition: .3s color;
}

a:hover {
  color: rgba(white, .7);
  transition: .3s color;
}

</style>
