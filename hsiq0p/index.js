import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bananas from "./Bananas/Bananas.js";
import BbacSprite from "./BbacSprite/BbacSprite.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Bananas: new Bananas({
    x: 69.5,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  BbacSprite: new BbacSprite({
    x: -158,
    y: -94,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
