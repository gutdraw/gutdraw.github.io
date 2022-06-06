/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas/costumes/bananas.svg", {
        x: 32.1479797761973,
        y: 31.5220928306843
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas/sounds/Bite.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Banana Farmers", 2);
  }
}
