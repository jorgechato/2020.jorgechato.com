<template>
    <nuxt-link :to="'/mochila#' + bucket.name | lowercase"
      :style="{ backgroundImage: 'url(' + bucket.thumbnail + ')' }"
      class="tile">

      <div class="mask"></div>
      <div class="tile__details">
          {{ bucket.name | capitalize }}
      </div>

    </nuxt-link>
</template>

<script>
export default{
  name: 'BucketMin',
  props: {
    bucket: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>

$height: 250px;
$width: calc(50% - 1em);

.tile__details {
  position: relative;
  text-align: center;
  font-size: 2em;
  font-family: "futura-bold";
  top: calc(50% - 1em / 2);
}

.mask{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(black, .6);
}

.tile {
  color: white;
  text-decoration: none;
  width: $width;
  height: $height;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: inline-block;
  vertical-align: center;
  margin: .5em;
}

</style>

