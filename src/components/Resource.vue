<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ name }}</span>
      <p>(Gana entre {{low}} y {{high}} oros).</p>
    </div>
    <div class="card-action">
      <a @click="play" href="#">Ganar!</a>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getDate() {
  const date = new Date();
  return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
}

export default {
  name: 'Resource',
  props: {
    name: String,
    high: Number,
    low: Number
  },
  methods: {
    play: function(ev) {
      ev.preventDefault();
      const new_gold = getRandomInt(this.low, this.high);
      console.log('new gold', new_gold)
      store.update_gold(new_gold);
      store.add_activity({
        num: new_gold,
        text: `Has ${new_gold < 0 ? 'perdido' : 'ganado'} ${new_gold} oros en ${this.name} (${getDate()})`
      });
    }
  }
}
</script>