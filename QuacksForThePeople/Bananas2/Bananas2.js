/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas2/costumes/bananas.svg", {
        x: 39,
        y: 38
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas2/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas2/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.broadcast("message3");
  }

  *whenIReceiveMessage3() {
    this.goto(200, -30);
    while (!(this.stage.vars.score > 4 || this.stage.vars.score < -1)) {
      yield* this.glide(3, -250, -137);
      this.goto(200, -30);
      this.stage.vars.score += 1;
      yield;
    }
  }

  *whenIReceiveMessage1() {
    if (this.touching(this.sprites["GlowX"].andClones())) {
      this.broadcast("message3");
    }
  }
}
