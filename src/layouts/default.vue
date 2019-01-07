<template>
  <div>

    <Logo />

    <nuxt/>

  </div>
</template>

<script>
import Logo from '~/components/Logo/Logo'

export default {
  components: {
    Logo,
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
