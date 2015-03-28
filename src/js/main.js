var Vue = require('vue');
var _ = require('lodash');

new Vue({
  el: '#app',
  template: require('./app.html'),
  data: {
    teams: require('../data/teams.json'),
    nicknames: require('../data/nick-names.json'),
    positions: require('../data/positions.json'),
    stories: require('../data/stories.json'),
    stats: require('../data/stats.json'),
    photos: require('../data/photos.json'),
    bats: ['Left', 'Right', 'Switch']
  },
  methods: {
    reload: function () {
      location.reload();
    }
  },
  components: {
    card: require('./components/card/index.js')
  },
  filters: {
    fixed: function (n, d) {
      return n.toFixed(d).slice(1);
    },
    round: function (n) {
      return Math.round(n);
    }
  }
});
