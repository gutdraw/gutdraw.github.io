/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BbacSprite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bbac_sprite", "./BbacSprite/costumes/bbac_sprite.svg", {
        x: 151.37386329543585,
        y: 12.366389044054529
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
