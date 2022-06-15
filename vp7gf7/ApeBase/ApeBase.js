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
        x: 99.5,
        y: -30.996131528046476
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-100, -6);
    while (true) {
      while (!this.touching(this.sprites["Bananas"].andClones())) {
        null;
        yield;
      }
      this.stage.vars.signal = 0;
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.glide(0.75, -100, 100);
    yield* this.glide(0.75, -100, -6);
  }
}
