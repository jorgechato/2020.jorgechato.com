<template>
  <section class="affiliates">

    <Affiliates
      v-for="bucket in buckets"
      :key="bucket.id"
      :bucket="bucket"
      />

  </section>
</template>

<script>
import Affiliates from '~/components/Affiliates/Affiliates'

export default {
  components: {
    Affiliates,
  },
  data: () => ({
    buckets: [
      {
        id: 1,
        name:"Equipo",
        description:"Con que grabo todos los vídeos y el podcast?",
        thumbnail:"https://www.slrlounge.com/wp-content/uploads/2017/01/casey-vlog-review-sony-joby.jpg",
        affiliates: [
          {
          id: 1,
          name: "test",
          },
          {
          id: 1,
          name: "test",
          },
          {
          id: 1,
          name: "test",
          },
          {
          id: 1,
          name: "test",
          },
        ],
      },
      {
        id: 2,
        name:"Gadgets",
        description:"Todos mis caprichos que pueden interesarte",
        thumbnail:"http://monthlymale.com/wp-content/uploads/2016/10/casey-neistat-vlog-gear.jpg",
        affiliates: [
          {
          id: 1,
          name: "kb",
          },
        ],
      },
      {
        id: 3,
        name:"merch",
        description:"Muy pronto",
        thumbnail:"https://i.ytimg.com/vi/GcbsIv3QdFs/maxresdefault.jpg",
        affiliates: [
        ],
      },
      {
        id: 4,
        name: "Biblioteca",
        description: "Estos son los libros que te recomiendo leer a toda costa",
        thumbnail: "https://i.kinja-img.com/gawker-media/image/upload/s--jSOQ1gI8--/c_scale,fl_progressive,q_80,w_800/yiivcapkvtsejhqcs7q6.png",
        affiliates: [
          {
          id: 1,
          name: "",
          },
        ],
      }
    ],
  }),
}
</script>

<style lang="scss" scoped>

.affiliates {
  margin: 0 2em;
}

</style>
