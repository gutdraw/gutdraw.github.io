import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Mushroomlight from "./Mushroomlight/Mushroomlight.js";
import ApeBase from "./ApeBase/ApeBase.js";
import Bananas from "./Bananas/Bananas.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Mushroomlight: new Mushroomlight({
    x: -44,
    y: 19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  ApeBase: new ApeBase({
    x: -100,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Bananas: new Bananas({
    x: -146.01733333333334,
    y: -141,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
