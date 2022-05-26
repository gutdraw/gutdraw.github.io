import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Lending from "./Lending/Lending.js";
import Mushroomlight from "./Mushroomlight/Mushroomlight.js";
import BananasNew from "./BananasNew/BananasNew.js";
import BbacSprite from "./BbacSprite/BbacSprite.js";
import Aave from "./Aave/Aave.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Lending: new Lending({
    x: -11,
    y: -93,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Mushroomlight: new Mushroomlight({
    x: -213,
    y: 76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BananasNew: new BananasNew({
    x: 69,
    y: -134,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BbacSprite: new BbacSprite({
    x: 189,
    y: -136,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Aave: new Aave({
    x: -144,
    y: -135,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
