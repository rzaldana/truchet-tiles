import { drawEllipse } from "./drawing_functions/drawEllipse.js";
import stringInterpreter from "./stringInterpreter.js";

new p5(function (p5) {
  p5.setup = function () {
    p5.createCanvas(1000, 1000);
    p5.noLoop();
  };

  p5.draw = function () {
    p5.background(0, 0, 255);
    let pg = p5.createGraphics(1000, 1000);
    const it = "T[IT[IIII]II]"[Symbol.iterator]();
    //pg.background(0, 255, 0)
    stringInterpreter(p5, pg, it);
    pg.fill(0, 255, 0);
    pg.ellipse(100, 100, 50, 50);
    p5.image(pg, 0, 0);
  };
});
