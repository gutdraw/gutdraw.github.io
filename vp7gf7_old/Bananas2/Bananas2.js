/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas2/costumes/bananas.svg", {
        x: -8.73847391070234,
        y: -8.568243899454586
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas2/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas2/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.sayAndWait("If on Mobile Refresh the page", 2);
    yield* this.sayAndWait("Click the mushroom or front bananas", 2);
  }
}
