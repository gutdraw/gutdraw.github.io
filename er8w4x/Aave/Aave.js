/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aave extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("aave", "./Aave/costumes/aave.svg", {
        x: 67.48265895953753,
        y: 32.671604046242834
      })
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Lending/Borrowing Liquidity Pool.", 2);
    yield* this.sayAndWait("Used for Leverage and/or Shorting", 2);
  }
}
