export default {
  state: {
    golds: 0,
    activities: []
  },
  update_gold(new_gold) {
    this.state.golds += new_gold;
  },
  add_activity(new_activity) {
    this.state.activities = [...this.state.activities, new_activity];
  },
  reset() {
    this.state.golds = 0;
    this.state.activities = [];
  }
}