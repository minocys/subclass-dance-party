var makeJaredDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="jaredDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');


};


makeJaredDancer.prototype = Object.create(makeDancer.prototype);

makeJaredDancer.prototype.step = function(){
  //makeDancer.prototype.step.call(this);

  //this.$node.toggle();
};

