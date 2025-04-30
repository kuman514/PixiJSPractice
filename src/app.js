import { addMoon } from './graphics/moon';
import { addStars } from './graphics/star';
import { pixiJsApp } from './setup/app-init';
import { preload } from './setup/preload';
import { setup } from './setup/setup';

(() => {
  (async () => {
    await setup();
    await preload();

    addStars({ pixiJsApp, amount: 20 });
    addMoon({ pixiJsApp });
  })();
})();
