import { generateHoshino } from './entities/hoshino';
import { generateKoishi } from './entities/koishi';
import { PixiJsAppSingleton } from './shared/setup';

(() => {
  (async () => {
    const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

    const koishiIcon = generateKoishi({
      x: Math.random() * pixiJsApp.screen.width,
      y: Math.random() * pixiJsApp.screen.height,
    });
    pixiJsApp.stage.addChild(koishiIcon);

    const hoshinoIcon = generateHoshino({
      x: Math.random() * pixiJsApp.screen.width,
      y: Math.random() * pixiJsApp.screen.height,
    });
    pixiJsApp.stage.addChild(hoshinoIcon);
  })();
})();
