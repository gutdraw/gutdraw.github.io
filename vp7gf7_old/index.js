import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import ApeBase from "./ApeBase/ApeBase.js";
import Mushroomlight from "./Mushroomlight/Mushroomlight.js";
import Bananas from "./Bananas/Bananas.js";
import Bananas2 from "./Bananas2/Bananas2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  ApeBase: new ApeBase({
    x: -137,
    y: -5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Mushroomlight: new Mushroomlight({
    x: 141,
    y: 9,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Bananas: new Bananas({
    x: 30,
    y: -27,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Bananas2: new Bananas2({
    x: -105,
    y: -5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
