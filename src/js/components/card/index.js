var _ = require('lodash');

module.exports = {
  replace: true,
  template: require('./template.html'),
  data: function () {
    return {
      G: Math.floor(Math.random() * 250)
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
    AB: function () {
      return this.random(this.G, this.G * 1.5);
    },
    H: function () {
      return this.random(1, this.AB * (this.random(40, 90) / 100));
    },
    B2: function () {
      return +this.random(1, this.AB);
    },
    B3: function () {
      return this.random(1, this.AB);
    },
    HR: function () {
      return this.random(0, 1000);
    },
    RBI: function () { 
      return this.random(0, 10000);
    },
    AVG: function () {
      return this.H / this.AB;
    }
  }
}