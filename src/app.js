import { Container } from 'pixi.js';

import { generateHoshino } from './entities/hoshino';
import { generateKoishi } from './entities/koishi';
import { PixiJsAppSingleton } from './shared/setup';

(() => {
  (async () => {
    const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

    const iconContainer = new Container();
    iconContainer.pivot.x = iconContainer.width / 2;
    iconContainer.pivot.y = iconContainer.height / 2;
    iconContainer.addChild(
      generateKoishi({
        x: -120,
        y: -120,
      }),
      generateHoshino({
        x: 120,
        y: -120,
      }),
      generateHoshino({
        x: -120,
        y: 120,
      }),
      generateKoishi({
        x: 120,
        y: 120,
      })
    );

    let mouseX = pixiJsApp.screen.width / 2;
    let mouseY = pixiJsApp.screen.height / 2;

    // This is needed for interaction
    pixiJsApp.stage.eventMode = 'static';
    pixiJsApp.stage.hitArea = pixiJsApp.screen;
    pixiJsApp.stage.on('mousemove', (event) => {
      mouseX = event.global.x;
      mouseY = event.global.y;
    });
    pixiJsApp.stage.addChild(iconContainer);

    pixiJsApp.ticker.add((time) => {
      const deltaMs = time.deltaMS;

      iconContainer.x = mouseX;
      iconContainer.y = mouseY;

      iconContainer.scale.set(Math.abs(Math.sin(iconContainer.rotation / 4)));
      iconContainer.rotation -= (deltaMs / 1000) * 2 * Math.PI;
      iconContainer.children.forEach((icon) => {
        icon.rotation += (deltaMs / 1000) * 3 * Math.PI;
      });
    });
  })();
})();
