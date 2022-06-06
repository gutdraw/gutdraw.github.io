/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ApeBase extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ape_base", "./ApeBase/costumes/ape_base.svg", {
        x: 99.49740474600003,
        y: -54.086884642504685
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
