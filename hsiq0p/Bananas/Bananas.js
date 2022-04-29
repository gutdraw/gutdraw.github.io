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
      new Costume("bananas", "./Bananas/costumes/bananas.svg", { x: 39, y: 38 })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(200, -137);
    for (let i = 0; i < 10; i++) {
      yield* this.glide(2.5, -250, -137);
      this.goto(200, -137);
      this.stage.vars.score += 1;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.score = 0;
    while (!this.touching(this.sprites["BbacSprite"].andClones())) {
      yield;
    }
    /* TODO: Implement stop all */ null;
  }
}
