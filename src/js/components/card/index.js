var _ = require('lodash');
var randomSum = require('./random-sum.js');

module.exports = {

  replace: true,

  template: require('./template.html'),

  data: function () {
    return {};
  },

  methods: {
    random: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNickname: function () {
      var nicknames = this.$root.nicknames;
      return _.sample(nicknames, 2).join(' ');
    },
    getPosition: function () {
      var positions = this.$root.positions;
      return _.sample(positions);
    },
    getTeam: function () {
      var teams = this.$root.teams;
      return _.sample(teams);
    },
    getBats: function () {
      var bats = this.$root.bats;
      return _.sample(bats);
    },
    getPhoto: function () {
      var images = this.$root.photos;
      return 'src/images/' + _.sample(images);
    },
    getStory: function () {
      var stories = this.$root.stories;
      return _.sample(stories)
        .replace(/NAME/g, this.nickname)
        .replace(/POSITION/g, this.position)
        .replace(/TEAM/g, this.team);
    },
    getStats: function () {
      // G, AB, R, H, 2B, 3B, HR, RBI, BB, SO, SB, CS, AVG, OBP, SLG, OPS
      var stats = _.sample(this.$root.stats);
      this.G = stats[0];
      this.AB = stats[1];
      this.R = stats[2];
      this.H = stats[3];
      this.B2 = stats[4];
      this.B3 = stats[5];
      this.HR = stats[6];
      this.RBI = stats[7];
      this.AVG = stats[12];
    }
  },

  created: function () {
    this.nickname = this.getNickname();
    this.position = this.getPosition();
    this.team = this.getTeam();
    this.bats = this.getBats();
    this.story = this.getStory();
    this.number = this.random(1, 99);
    this.photo = this.getPhoto();
    this.getStats();
  }
}