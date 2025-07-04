"use strict";
/* here slider is an object. */
const slider = {
  images: ["flamingo.jpg", "bluebird.jpg", "owl.jpg"],
  slider: document.createElement("div"),
  img: document.createElement("img"),
/* we use : instead of = for objects */
  currentIndex: 0,
  /* createimage is a method */
  createImage() {
    const { slider, img } = this;
    // const slider = this.slider;
    // const img = this.img;
    slider.style.width = "600px";
    slider.style.height = "300px";
    slider.style.overflow = "hidden";
    slider.style.position = "relative";

    img.src = this.images[this.currentIndex];
    img.style.width = "100%";
    img.style.height = "100%";
    slider.appendChild(img);

    document.body.appendChild(slider);
    this.createbutton(); /* this means the createbutton method is attached 
	to the main createimage method */
  },
  createbutton() {
    const { slider } = this;
    const nextButton = document.createElement("button");
    nextButton.innerText = "❯";
    nextButton.style.fontWeight = "bold";
    nextButton.style.position = "absolute";
    nextButton.style.right = "10px";
    nextButton.style.top = "50%";
    nextButton.onclick = this.nextImage.bind(this);
    slider.appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.innerText = "❮";
    prevButton.style.position = "absolute";
    prevButton.style.left = "10px";
    prevButton.style.top = "50%";
    prevButton.onclick = () => {
    this.prevImage();
    };
    slider.appendChild(prevButton);
  },
  nextImage() {
    const { img, images } = this;

    this.currentIndex = (this.currentIndex + 1) % images.length;
    img.src = images[this.currentIndex];
  },

  prevImage() {
    const { img, images } = this;
    this.currentIndex = (this.currentIndex - 1 + images.length) % images.length;
    img.src = images[this.currentIndex];
  },
};

export{slider};