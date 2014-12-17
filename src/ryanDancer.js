var RyanDancer = function(top, left, timeBetweenSteps, node){
  var node = node || $('<span class="ryanDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');
};


RyanDancer.prototype = Object.create(Dancer.prototype);

RyanDancer.prototype.step = function(){
  //makeDancer.prototype.step.call(this);
  this.$node.fadeIn(900);

};