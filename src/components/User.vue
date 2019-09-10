<template>
  <div class="user">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      msg: 'Userlist'
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
