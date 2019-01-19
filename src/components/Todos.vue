<template>
  <section class="list">

    <h2>{{ "Mi pequeña lista" | uppercase }}</h2>

    <div class="todos">
      <div
        class="todo"
        v-for="(todo, i) in first()"
        :class="{ done: todo.done }"
        :key="todo.key">
          {{ i+1 }}. <span>{{ todo.title }}</span>
      </div>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="(todo, i) in last()"
        :class="{ done: todo.done }"
        :key="todo.key">
        {{ i+1+mid }}. <span>{{ todo.title }}</span>
      </div>
    </div>

  </section>
</template>

<script>
export default{
  name: 'Todos',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    mid: 0,
  }),
  mounted(){
    this.mid = Math.ceil(this.todos.length/2)
  },
  methods: {
    first() {
      return this.todos.slice(0, this.mid)
    },
    last() {
      return this.todos.slice(this.mid, this.todos.length)
    },
  },
}
</script>

<style lang="scss" scoped>

.list {
  margin: 50px auto;
  text-align: center;
}

.done {
  color: rgba(white, .6);

  span {
    text-decoration: line-through;
  }
}

.todos {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding: 0 4%;
}

.fa-check, .fa-check-square {
  color: red;
}

</style>
