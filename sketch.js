import { drawEllipse } from "./drawing_functions/drawEllipse.js";

new p5(function (p5) {
  p5.setup = function () {
    p5.createCanvas(1000, 1000);
  };

  p5.draw = function () {
    p5.background(55);
    drawEllipse(p5);
    //p5.ellipse(50, 50, 50, 50);
  };
});
