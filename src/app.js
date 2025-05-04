import { addMoon } from './graphics/moon';
import { addMountains, animateMountains } from './graphics/mountain';
import { addStars } from './graphics/star';
import { animateTrees, generateRandomTrees } from './graphics/tree';
import { pixiJsApp } from './setup/app-init';
import { setup } from './setup/setup';

(() => {
  (async () => {
    await setup();

    addStars({ pixiJsApp, amount: 20 });
    addMoon({ pixiJsApp });

    const mountainGraphics = [
      addMountains({
        pixiJsApp,
        mountains: [
          {
            startX: pixiJsApp.screen.width / 4,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: (pixiJsApp.screen.height * 4) / 5,
            color: '#7e818f',
          },
          {
            startX: 0,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: pixiJsApp.screen.height / 2,
            color: '#c1c0c2',
          },
          {
            startX: pixiJsApp.screen.width / 2,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: (pixiJsApp.screen.height * 2) / 3,
            color: '#8c919f',
          },
        ],
      }),
      addMountains({
        pixiJsApp,
        mountains: [
          {
            startX: pixiJsApp.screen.width / 4,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: (pixiJsApp.screen.height * 4) / 5,
            color: '#7e818f',
          },
          {
            startX: 0,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: pixiJsApp.screen.height / 2,
            color: '#c1c0c2',
          },
          {
            startX: pixiJsApp.screen.width / 2,
            startY: pixiJsApp.screen.height,
            width: pixiJsApp.screen.width / 2,
            height: (pixiJsApp.screen.height * 2) / 3,
            color: '#8c919f',
          },
        ],
      }),
    ];
    // Set x offset of another mountain graphics
    mountainGraphics[1].x = pixiJsApp.screen.width;

    animateMountains({
      pixiJsApp,
      graphics: mountainGraphics,
    });

    const trees = generateRandomTrees({
      pixiJsApp,
      count: 4,
      spacing: pixiJsApp.screen.width / 6,
    });
    animateTrees({
      pixiJsApp,
      trees,
    });
  })();
})();
