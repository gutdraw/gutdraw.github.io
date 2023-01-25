import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _58e8fd3deb97430e819064bd from "./_58e8fd3deb97430e819064bd/_58e8fd3deb97430e819064bd.js";
import GlowX from "./GlowX/GlowX.js";
import Bananas2 from "./Bananas2/Bananas2.js";
import _96967876PictureLibraryDownloadDuckSvgPngIconFree from "./_96967876PictureLibraryDownloadDuckSvgPngIconFree/_96967876PictureLibraryDownloadDuckSvgPngIconFree.js";
import _58e8fd3deb97430e819064bd2 from "./_58e8fd3deb97430e819064bd2/_58e8fd3deb97430e819064bd2.js";
import _58e8fd3deb97430e819064bd3 from "./_58e8fd3deb97430e819064bd3/_58e8fd3deb97430e819064bd3.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  _58e8fd3deb97430e819064bd: new _58e8fd3deb97430e819064bd({
    x: 200,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 4
  }),
  GlowX: new GlowX({
    x: -240,
    y: 170,
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
  _96967876PictureLibraryDownloadDuckSvgPngIconFree: new _96967876PictureLibraryDownloadDuckSvgPngIconFree(
    {
      x: -185,
      y: -119,
      direction: 90,
      costumeNumber: 1,
      size: 20,
      visible: true,
      layerOrder: 5
    }
  ),
  _58e8fd3deb97430e819064bd2: new _58e8fd3deb97430e819064bd2({
    x: 200,
    y: 10,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 3
  }),
  _58e8fd3deb97430e819064bd3: new _58e8fd3deb97430e819064bd3({
    x: 200,
    y: 80,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
