import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import GlowX from "./GlowX/GlowX.js";
import Bananas2 from "./Bananas2/Bananas2.js";
import SharpHead from "./SharpHead/SharpHead.js";
import Rug from "./Rug/Rug.js";
import Rug2 from "./Rug2/Rug2.js";
import Rug3 from "./Rug3/Rug3.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  GlowX: new GlowX({
    x: -47,
    y: 8,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Bananas2: new Bananas2({
    x: 200,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  SharpHead: new SharpHead({
    x: -180,
    y: -102,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  }),
  Rug: new Rug({
    x: 200,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 5
  }),
  Rug2: new Rug2({
    x: 200,
    y: 10,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 4
  }),
  Rug3: new Rug3({
    x: 200,
    y: 80,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
