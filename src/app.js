import { generateHoshino } from './entities/hoshino';
import { generateKoishi } from './entities/koishi';
import { PixiJsAppSingleton } from './shared/setup';
import { generateIconTracker } from './features/icon-tracker';

(() => {
  (async () => {
    const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

    // This is needed for interaction
    pixiJsApp.stage.eventMode = 'static';
    pixiJsApp.stage.hitArea = pixiJsApp.screen;

    const iconTracker = await generateIconTracker({
      initIcons: [
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
        }),
      ],
      initPosition: {
        x: pixiJsApp.screen.width / 2,
        y: pixiJsApp.screen.height / 2,
      },
    });

    pixiJsApp.stage.addChild(iconTracker);
  })();
})();
