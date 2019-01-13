<template>
  <div class="footer__net">

    <span class="limit">{</span>

    <a href="//www.youtube.com/channel/UCvYE-kjfF_fkg6akr5DNvdw?view_as=subscriber"><fa :icon="['fab', 'youtube']" /></a>
    <a href="//open.spotify.com/show/6HPGljWQbxmnxqhWNNMUpX"><fa :icon="['fab', 'spotify']" /></a>
    <a href="//itunes.apple.com/es/podcast/code/id1440641047?l=en&mt=2"><fa :icon="['fab', 'itunes']" /></a>
    <a href="//www.instagram.com/jorgechato"><fa :icon="['fab', 'instagram']" /></a>

    <span class="limit">}</span>

    <div class="by">
      con <fa :icon="['fas', 'heart']" /> por Jorge Chato
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
$youtube: #ff0000;
$spotify: #1db954;
$itunes: white;
$instagram: #c13584;
$color: rgba(white, .7);


.footer__net{
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;

  .by{
    padding-top: 2em;
    color: rgba(white, .1);

    .fa-heart {
      font-size: inherit;
      color: inherit;
    }
  }

  .limit{
    font-size: 4em;
    color: $color;
  }
}

.svg-inline--fa{
  font-size: 2.5em;
  padding: 0 .2em;
  text-decoration: none;
  color: $color;
}

.fa-youtube:hover{
  color: $youtube;
}

.fa-spotify:hover{
  color: $spotify;
}

.fa-itunes:hover{
  color: $itunes;
}

.fa-instagram:hover{
  color: $instagram;
}
</style>
