const dictionary = {
  // each function in the dictionary takes:
  // p5: a p5 or PGraphics instance
  // it: a string iterator for the string being interpreted
  I: (p5, pg, it) => {
    console.log("full widht and size image");
    pg.fill(255, 0, 0);
    pg.ellipse(pg.width/2, pg.height/2, pg.width/2);
  },
  T: function (p5, pg, it) {
    var char = it.next();
    // create 4 PGraphics object
    var i = 0;
    while (i < 4) {
      console.log(i);

      var size = pg.width / 2;
      console.log(size);
      var x_loc = i % 2 == 0 ? 0 : size;
      var y_loc = i < 2 ? 0 : size;

      var new_pg = p5.createGraphics(size, size);
      console.log("Created new graphic");

      if (char.value != '[') {
        console.error('T has to be followed by [');
      }

      new_pg.background(Math.random()*255, 0, 0);
      stringInterpreter(p5, new_pg, it);
      pg.image(new_pg, x_loc, y_loc);

    }
  },
};

export default function stringInterpreter(p5, pg, it) {
  let char = it.next();

  if(!char.done) {
    try {
      // check for [ or ]
      if (char.value == '[') char = it.next();
      if (char.value == ']') char = it.next();

      // any other chars are found in dictionary
      dictionary[char.value](p5, pg, it);
    } catch (error) {
      console.error(error);
    }
   // char = it.next();
  }
  console.log("done");
}
