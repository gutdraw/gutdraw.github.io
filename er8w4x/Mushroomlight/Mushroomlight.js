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
        { x: 8.065048891008729, y: 16.5692821368948 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.sayAndWait("Click the three icons below for more info", 3);
  }
}
