var mouseDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="mouseDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');
};

mouseDancer.prototype = Object.create(makeDancer.prototype);

mouseDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if(window.dancers)
  //this.$node.fadeToggle({duration:900});
};