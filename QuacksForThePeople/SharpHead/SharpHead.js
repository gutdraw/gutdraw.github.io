/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SharpHead extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sharp_head", "./SharpHead/costumes/sharp_head.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
