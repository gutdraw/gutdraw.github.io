/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rug3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rug", "./Rug3/costumes/rug.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMessage1() {
    if (this.touching(this.sprites["GlowX"].andClones())) {
      yield* this.broadcastAndWait("message5");
    }
  }

  *whenIReceiveMessage5() {
    this.goto(200, 80);
    while (!(this.stage.vars.score < -1 || this.stage.vars.score > 3)) {
      yield* this.glide(2.25, -250, -137);
      this.goto(200, 80);
      this.stage.vars.score += -1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.broadcast("message5");
  }
}
