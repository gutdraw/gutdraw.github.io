/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowX extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-X", "./GlowX/costumes/Glow-X.svg", { x: 40, y: 39 })
    ];

    this.sounds = [new Sound("pop", "./GlowX/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("message1");
  }
}
