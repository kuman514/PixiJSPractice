import { PixiJsAppSingleton } from './shared/setup';
import { generateIconTracker } from './features/icon-tracker';
import { generateIcon } from './entities/icon';

(() => {
  (async () => {
    const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

    // This is needed for interaction
    pixiJsApp.stage.eventMode = 'static';
    pixiJsApp.stage.hitArea = pixiJsApp.screen;

    const iconTracker = await generateIconTracker({
      initIcons: [
        generateIcon({
          spriteName: 'koishi',
          x: -120,
          y: -120,
        }),
        generateIcon({
          spriteName: 'hoshino',
          x: 120,
          y: -120,
        }),
        generateIcon({
          spriteName: 'hoshino',
          x: -120,
          y: 120,
        }),
        generateIcon({
          spriteName: 'koishi',
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
