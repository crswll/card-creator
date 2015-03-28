var _ = require('lodash');
var randomSum = require('./random-sum.js');

module.exports = {

  replace: true,

  template: require('./template.html'),

  data: function () {
    return {
      G: Math.floor(Math.random() * 250),
      TOTAL: Math.floo
    }
  },

  methods: {
    random: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  computed: {
    nickname: function () {
      var nicknames = this.$root.nicknames;
      return _.sample(nicknames, 2).join(' ');
    },

    team: function () {
      var teams = this.$root.teams;
      return _.sample(teams);
    },

    position: function () {
      var positions = this.$root.positions;
      return _.sample(positions);
    },

    bats: function () {
      var bats = this.$root.bats;
      return _.sample(bats);
    },

    number: function () {
      return this.random(1, 99);
    },

    AB: function () {
      return this.random(this.G, this.G * 1.5);
    },

    HITS: function () {
      return randomSum(4, this.random(10, this.AB));
    },

    H: function () {
      return this.HITS[0];
    },

    B2: function () {
      return this.HITS[1];
    },

    B3: function () {
      return this.HITS[2];
    },

    HR: function () {
      return this.HITS[3];
    },

    RBI: function () { 
      return this.random(0, 10000);
    },

    AVG: function () {
      return this.H / this.AB;
    }
  }
}