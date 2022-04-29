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
      new Costume("bbac_sprite", "./BbacSprite/costumes/bbac_sprite.png", {
        x: 300,
        y: 300
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-158, -94);
  }

  *whenthisspriteclicked() {
    yield* this.glide(0.75, -158, 0);
    yield* this.glide(0.75, -158, -94);
  }
}
