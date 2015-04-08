var BlinkyDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="dancer"></span>');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
