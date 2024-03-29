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
        x: 12.207615593918462,
        y: 11.969804900530391
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(166, -141);
    yield* this.wait(0.5);
    while (true) {
      while (!(this.stage.vars.signal > -1)) {
        this.goto(166, -141);
        yield* this.glide(3, -600, -141);
        yield;
      }
      yield;
    }
  }
}
