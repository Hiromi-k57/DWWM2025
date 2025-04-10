"use strict";

import { slider } from "./slider.js";
import { PaintApp } from "./paint.js";
// import { pricegame } from "./price.js";

document
  .querySelector("#info")
  .addEventListener("change", function slideshow() {
    if (this.value == "sl") {
      slider.createImage();
    }
    else if(this.value == "pa") {
        PaintApp.painting();
    }
  });


