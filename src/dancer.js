// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, obj){
  //this.top = top;
  //this.left = left;
  //$('<span class="dancer"></span>')
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = obj;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

