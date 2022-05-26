/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lending extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("lending", "./Lending/costumes/lending.svg", {
        x: 212,
        y: 256
      })
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Decentralized Exchange Liquidity Provider", 2);
    yield* this.sayAndWait("Earning swap fees and rewards", 2);
  }
}
