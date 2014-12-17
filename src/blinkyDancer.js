var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="dancer"></span>');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};
