<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Ninja Oro</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="collection">
            <a href="#!" class="collection-item oro-item">Oro<span :class="{badge: true, pierde: golds < 0}">{{golds}}</span></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s3 m3">
          <Resource name="Granja" :low="10" :high="20" />
        </div>
        <div class="col s3 m3">
          <Resource name="Caverna" :low="5" :high="10" />
        </div>
        <div class="col s3 m3">
          <Resource name="Casa" :low="2" :high="5" />
        </div>
        <div class="col s3 m3">
          <Resource name="Casino" :low="-50" :high="50" />
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4>Actividades:</h4>
          <ul class="collection">
            <li v-for="(activity, i) in activities" v-bind:key="i" :class="{pierde: activity.num < 0, gana: activity.num > 0, 'collection-item': true}">{{activity.text}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <a href="#" @click="reset" class="waves-effect waves-light btn">Reset</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Resource from '@/components/Resource.vue'
import store from '@/store.js'

export default {
  name: 'NinjaOro',
  components: {
    Resource
  },
  data() {
    return store.state
  },
  methods: {
    reset(ev) {
      ev.preventDefault();
      const conf = confirm('¿Está seguro que desea resetear?');
      if (!conf) { return }
      store.reset();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.oro-item {
  text-align: left;
  font-size: 3rem;
}
.oro-item .badge {
  font-size: 3rem;
}
.pierde { color: #c62828 !important; }
.gana { color: #0d47a1;}
</style>
