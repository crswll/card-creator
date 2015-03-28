module.exports = function(n, t) {

  var max = n * (n + 1) / 2;

  if(t < max) return 'Input error';

  var list = [];
  var sum = 0;
  var i = n;

  while (i--) {
    var r = Math.random();
    list.push(r);
    sum += r;
  }

  var factor = t / sum;

  sum = 0;

  i = n;

  while(--i){
    list[i] = parseInt(factor * list[i]);
    sum += list[i];
  }

  list[0] = t - sum;

  return list;
}