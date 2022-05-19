/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("IMG_0149", "./Stage/costumes/IMG_0149.svg", {
        x: 244.81647803673917,
        y: 179.2658956325571
      }),
      new Costume("IMG_0052", "./Stage/costumes/IMG_0052.svg", {
        x: 571.0231213872838,
        y: 178.9566473988442
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "IMG_0149";
    yield* this.wait(9);
    this.costume = "IMG_0052";
  }
}
