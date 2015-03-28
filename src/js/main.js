var Vue = require('vue');
var _ = require('lodash'); 

new Vue({
  el: '#app',
  template: require('./app.html'),
  data: {
    teams: require('../data/teams.json'),
    nicknames: require('../data/nick-names.json'),
    positions: require('../data/positions.json'),
    bats: ['Left', 'Right', 'Switch']
  },
  components: {
    card: require('./components/card/index.js')
  },
  filters: {
    fixed: function (n, d) {
      return n.toFixed(d);
    }
  }
});