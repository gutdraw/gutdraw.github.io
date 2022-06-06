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
        "./Mushroomlight/costumes/mushroomLight.svg",
        { x: 7.464917676730948, y: 17.783785491055824 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.clear();
    this.createClone();
  }

  *startAsClone() {
    yield* this.glide(0.75, this.random(-240, 240), this.random(-180, 180));
    this.effects.color += 35;
    yield* this.wait(1);
    this.effects.clear();
    this.deleteThisClone();
  }

  *whenthisspriteclicked() {
    this.effects.clear();
    this.createClone();
  }
}
