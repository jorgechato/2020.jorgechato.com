<template>
  <section>
    <div class="buckets">

      <Bucket
        name="Equipo"
        description="Con que grabo todos los vídeos y el podcast?"
        thumbnail="https://www.slrlounge.com/wp-content/uploads/2017/01/casey-vlog-review-sony-joby.jpg"
        />
      <Bucket
        name="Gadgets"
        description="Todos mis caprichos que pueden interesarte"
        thumbnail="http://monthlymale.com/wp-content/uploads/2016/10/casey-neistat-vlog-gear.jpg"
        />
      <Bucket
        name="merch"
        description="Muy pronto"
        thumbnail="https://i.ytimg.com/vi/GcbsIv3QdFs/maxresdefault.jpg"
        />
      <Bucket
        name="Biblioteca"
        description="Estos son los libros que te recomiendo leer a toda costa"
        thumbnail="https://i.kinja-img.com/gawker-media/image/upload/s--jSOQ1gI8--/c_scale,fl_progressive,q_80,w_800/yiivcapkvtsejhqcs7q6.png"
        />

    </div>
  </section>
</template>

<script>
import Bucket from '~/components/Affiliates/Bucket'

export default {
  components: {
    Bucket
  }
}
</script>

<style lang="scss" scoped>

section{
  margin: auto;
  display: flex;
	align-items: center;
	justify-content: center;
}

</style>
