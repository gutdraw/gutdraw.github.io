import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Mushroomlight from "./Mushroomlight/Mushroomlight.js";
import BbacSprite from "./BbacSprite/BbacSprite.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Mushroomlight: new Mushroomlight({
    x: -162,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BbacSprite: new BbacSprite({
    x: -76,
    y: -39,
    direction: 89.47202695764787,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite1: new Sprite1({
    x: 18,
    y: -407,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 19,
    y: -407,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: 34,
    y: -407,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
