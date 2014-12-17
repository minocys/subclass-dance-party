var JaredDancer = function(top, left, timeBetweenSteps){
  var node = $('<span class="jaredDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');


};


JaredDancer.prototype = Object.create(Dancer.prototype);

JaredDancer.prototype.step = function(){
  //makeDancer.prototype.step.call(this);

  //this.$node.toggle();
};

