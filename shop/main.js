`use strict`;

const item = document.querySelector(".item");
const list = document.querySelector(".list");
for (let i = 0; i < 8; i++) {
  let test = item.cloneNode(true);
  list.appendChild(test);
}

class Cloth {
  constructor(img, gender, kind, color, size) {
    this.img = img;
    this.gender = gender;
    this.kind = kind;
    this.color = color;
    this.size = size;
  }
}

const clothes = [
  new Cloth("img/blue_p", "male", "pants", "blue", "large"),
  new Cloth("img/blue_s", "female", "skirt", "blue", "small"),
  new Cloth("img/blue_t", "male", "tshirts", "blue", "large"),
  new Cloth("img/pink_p", "male", "pants", "pink", "large"),
  new Cloth("img/pink_s", "female", "skirt", "pink", "small"),
  new Cloth("img/pink_t", "male", "tshirts", "pink", "large"),
  new Cloth("img/yellow_p", "male", "pants", "yellow", "large"),
  new Cloth("img/yellow_s", "female", "skirt", "yellow", "small"),
  new Cloth("img/yellow_t", "male", "tshirts", "yellow", "large"),
];

const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items[i].children.length; j++) {
    console.log(items[i].children[j].className);
  }
}
