import { Sprite } from 'pixi.js';

import { pixiJsApp } from './setup/app-init';
import { preload } from './setup/preload';
import { setup } from './setup/setup';
import { addBackground } from './sprite/background';

(() => {
  (async () => {
    await setup();
    await preload();

    addBackground();

    const koishi = Sprite.from('koishi');

    // Set sprite position and size.
    koishi.anchor.set(0.5);
    koishi.x = pixiJsApp.screen.width / 2;
    koishi.y = pixiJsApp.screen.height / 2;
    koishi.width /= 2;
    koishi.height /= 2;

    // Append to the stage.
    pixiJsApp.stage.addChild(koishi);

    // Grant image rotation.
    pixiJsApp.ticker.add((time) => {
      // The rotation in PixiJS is radian-based.
      koishi.rotation += 0.05 * time.deltaTime;
    });

    // Grant image movement.
    pixiJsApp.ticker.add(() => {
      // The rotation in PixiJS is radian-based.
      koishi.x += 10 * Math.cos(koishi.rotation);
    });
  })();
})();
