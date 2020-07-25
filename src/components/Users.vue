<template>
  <div class="hello">
    <h1>Página personal de {{ $route.params.nombre }}</h1>
    <p>
      Acá podrás ver los datos de este usuario
      <br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
