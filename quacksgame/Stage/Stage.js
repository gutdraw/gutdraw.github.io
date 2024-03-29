/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
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
      new Costume("Blue Sky2", "./Stage/costumes/Blue Sky2.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 4;
    this.vars.score = 5;
    this.vars.hit = 4;

    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 176
    });
    this.watchers.hit = new Watcher({
      label: "hit",
      style: "normal",
      visible: true,
      value: () => this.vars.hit,
      x: 245,
      y: 147
    });
  }
}
