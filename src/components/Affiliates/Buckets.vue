<template>
  <section>

    <hide-at
      :breakpoints="{medium: 1025}"
      breakpoint="mediumAndBelow">
      <div class="slide">
        <div class="buckets">
          <Bucket
            v-for="bucket in buckets"
            :key="bucket.id"
            :bucket="bucket"
            />
        </div>
      </div>
    </hide-at>

    <show-at
      :breakpoints="{medium: 1025}"
      breakpoint="mediumAndBelow"
      v-for="bucket in buckets"
      :key="bucket.id">
        <BucketMin :bucket="bucket" />
    </show-at>

  </section>
</template>

<script>
import BucketMin from '~/components/Affiliates/BucketMin'
import Bucket from '~/components/Affiliates/Bucket'
import { showAt, hideAt } from 'vue-breakpoints'


export default {
  components: {
    Bucket,
    BucketMin,
    showAt,
    hideAt,
  },
  data: () => ({
    buckets: [
      {
        id: 1,
        name:"Equipo",
        description:"Con que grabo todos los vídeos y el podcast?",
        thumbnail:"https://www.slrlounge.com/wp-content/uploads/2017/01/casey-vlog-review-sony-joby.jpg",
      },
      {
        id: 2,
        name:"Gadgets",
        description:"Todos mis caprichos que pueden interesarte",
        thumbnail:"http://monthlymale.com/wp-content/uploads/2016/10/casey-neistat-vlog-gear.jpg",
      },
      {
        id: 3,
        name:"merch",
        description:"Muy pronto",
        thumbnail:"https://i.ytimg.com/vi/GcbsIv3QdFs/maxresdefault.jpg",
      },
      {
        id: 4,
        name: "Biblioteca",
        description: "Estos son los libros que te recomiendo leer a toda costa",
        thumbnail: "https://i.kinja-img.com/gawker-media/image/upload/s--jSOQ1gI8--/c_scale,fl_progressive,q_80,w_800/yiivcapkvtsejhqcs7q6.png",
      }
    ],
  }),
}
</script>

<style lang="scss" scoped>

.slide{
  margin: auto;
  display: flex;
	align-items: center;
	justify-content: center;
}

</style>
