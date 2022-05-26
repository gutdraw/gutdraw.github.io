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
        x: 66.5458806820476,
        y: 67.03225225638457
      })
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Degen Defi Yield Farming", 3);
  }
}
