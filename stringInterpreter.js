const dictionary = {
  // each function in the dictionary takes:
  // p5: a p5 or PGraphics instance
  // it: a string iterator for the string being interpreted
  I: (p5, pg, it) => {
    console.log("full widht and size image");
    pg.rect(300, 300, 100, 100);
  },
  T: function (p5, pg, it) {
    // create 4 PGraphics object
    var i = 0;
    while (i < 4) {
      console.log(i);

      var size = pg.width / 2;
      console.log(size);
      var x_loc = i % 2 == 0 ? 0 : size;
      var y_loc = i < 2 ? 0 : size;

      var new_pg = p5.createGraphics(size, size);

      try {
      } catch (error) {
        console.log("Error creating PGraphics");
        console.log(error);
      }

      new_pg.background(0, Math.random() * 255, 0);
      stringInterpreter(p5, pg, it);
      pg.image(new_pg, x_loc, y_loc);

      i = i + 1;
      //console.log(i);
    }
  },
};

export default function stringInterpreter(p5, pg, it) {
  let char = it.next();

  while (!char.done) {
    try {
      dictionary[char.value](p5, p5, it);
    } catch (error) {
      //console.error(error);
      console.log("hello");
      console.log("Error happened in dictionary");
    }
    char = it.next();
  }
  console.log("done");
}
