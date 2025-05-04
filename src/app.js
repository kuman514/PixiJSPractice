import { addMoon } from './graphics/moon';
import { addMountains, animateMountains } from './graphics/mountain';
import { addStars } from './graphics/star';
import { pixiJsApp } from './setup/app-init';
import { setup } from './setup/setup';

(() => {
  (async () => {
    await setup();

    addStars({ pixiJsApp, amount: 20 });
    addMoon({ pixiJsApp });

    const mountainGraphics1 = addMountains({
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
    });
    const mountainGraphics2 = addMountains({
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
    });
    // Set x offset of another mountain graphics
    mountainGraphics2.x = pixiJsApp.screen.width;

    animateMountains({
      pixiJsApp,
      graphics: [mountainGraphics1, mountainGraphics2],
    });
  })();
})();
