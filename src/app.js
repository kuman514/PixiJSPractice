import { PixiJsAppSingleton } from './shared/setup';
import { generateIconTracker } from './features/icon-tracker';
import { generateIcon } from './entities/icon';
import { generateIconCloud } from './features/icon-cloud';

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

    const cloudSpriteNames = ['react', 'hanmogm', 'javascript', 'typescript'];
    const iconCloud = await generateIconCloud({
      initIcons: Array.from({ length: 40 }, (_, i) =>
        generateIcon({
          spriteName: cloudSpriteNames[i % cloudSpriteNames.length],
          x: 0,
          y: 0,
        })
      ),
    });

    pixiJsApp.stage.addChild(iconCloud);
    pixiJsApp.stage.addChild(iconTracker);
  })();
})();
