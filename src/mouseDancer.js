var MouseDancer = function(top, left, timeBetweenSteps){
  //var node = $('<span class="mouseDancer"></span>');
  //makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');
  var node =  $('<span class="mouseDancer"></span>');
  RyanDancer.call(this, top, left, timeBetweenSteps, node); 
};

MouseDancer.prototype = Object.create(RyanDancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;

MouseDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MouseDancer.prototype.step = function(){
  //$('mouseDancer').on('mouseenter', function(){
  //  $('mouseDancer').addClass('rotation');
  //});

};