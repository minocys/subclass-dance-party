var makeRyanDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="ryanDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');
};


makeRyanDancer.prototype = Object.create(makeDancer.prototype);

makeRyanDancer.prototype.step = function(){
  //makeDancer.prototype.step.call(this);
  this.$node.fadeIn(900);

};