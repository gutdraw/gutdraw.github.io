/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mushroomlight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "mushroomLight",
        "./Mushroomlight/costumes/mushroomLight.png",
        { x: 59, y: 99 }
      )
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("click the ape to jump", 1);
    this.stage.vars.signal = -3;
  }
}
