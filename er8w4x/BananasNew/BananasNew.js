/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BananasNew extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas_new", "./BananasNew/costumes/bananas_new.svg", {
        x: -57.532811095415354,
        y: -11.46410684474111
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
