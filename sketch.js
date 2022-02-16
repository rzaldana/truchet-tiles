import { drawEllipse } from "./drawing_functions/drawEllipse.js";
import stringInterpreter from "./stringInterpreter.js";

new p5(function (p5) {
  p5.setup = function () {
    p5.createCanvas(1000, 1000);
    p5.noLoop();
  };

  p5.draw = function () {
    p5.background(55, 0, 0);
    //drawEllipse(p5);
    let pg = p5.createGraphics(500, 500);
    try {
      var pg2 = p5.createGraphics(200, 200);
    } catch (error) {
      console.log("error");
    }
    pg2.fill(0, 0, 255);
    pg2.ellipse(20, 20, 20);
    pg.square(100, 100, 100);
    const it = "T"[Symbol.iterator]();
    stringInterpreter(p5, pg, it);
    //p5.image(pg, 500, 0);
    p5.image(pg2, 0, 0);
  };
});
