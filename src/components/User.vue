<template>
  <div class="user">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'User list',
  data () {
    return {
      msg: 'User list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
	text-align: center;
}
</style>
