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

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.glide(1, -26, -19);
    yield* this.wait(0.1);
    yield* this.glide(1, -76, -39);
  }

  *whenbackdropswitchesto() {}

  *whenGreenFlagClicked() {
    yield* this.wait(8.5);
    yield* this.glide(1, -26, -19);
    yield* this.wait(0.1);
    yield* this.glide(1, -76, -39);
    yield* this.sayAndWait("Click the Monkey", 1.75);
  }
}
