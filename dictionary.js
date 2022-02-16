//import stringInterpreter from "./stringInterpreter";

export const dictionary = {
  // each function in the dictionary takes:
  // p5: a p5 or PGraphics instance
  // it: a string iterator for the string being interpreted
  I: (p5, it) => {
    console.log("full widht and size image");
    p5.rect(300, 300, 100, 100);
  },
  T: (p5, it) => {
    // create 4 PGraphics object
    for (let i = 0; i < 4; i++) {
      let size = p5.width / 2;
      let x_loc = i % 2 == 0 ? 0 : size;
      let y_loc = i < 2 ? 0 : size;
      let pg = p5.createGraphics(size, size);
      stringInterpreter(it, pg);
      p5.image(pg, x_loc, y_loc);
    }
    p5.fill(0, 255, 0);
    p5.rect(400, 300, 100, 100);
  },
};
