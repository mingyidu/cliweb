<template>
  <div class="hello">
    <h1 @click="say_hello">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ShowSome',
  data () {
    return {
      msg: 'Show something for YOU!'
    }
  },
  methods: {
    say_hello () {
      alert('hello us')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
