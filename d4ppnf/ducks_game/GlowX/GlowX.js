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
    if (this.touching(this.sprites["_58e8fd3deb97430e819064bd"].andClones())) {
      this.stage.vars.hit = 2;
    }
    if (this.touching(this.sprites["_58e8fd3deb97430e819064bd3"].andClones())) {
      this.stage.vars.hit = 4;
    }
    if (this.touching(this.sprites["_58e8fd3deb97430e819064bd2"].andClones())) {
      this.stage.vars.hit = 3;
    }
    if (this.touching(this.sprites["Bananas2"].andClones())) {
      this.stage.vars.hit = 1;
    }
    this.broadcast("message1");
  }
}
