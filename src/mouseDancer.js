var mouseDancer = function(top, left, timeBetweenSteps){
  //var node = $('<span class="mouseDancer"></span>');
  //makeDancer.call(this, top, left, timeBetweenSteps, node);
  //this.$node = $('<span class="ryanDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node =  $('<span class="mouseDancer"></span>');
  this.setPosition(top, left);
  this.step();
};

mouseDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

mouseDancer.prototype.step = function(){
  //$('mouseDancer').on('mouseenter', function(){
  //  $('mouseDancer').addClass('rotation');
  //});

};