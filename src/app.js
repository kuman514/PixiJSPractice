import { preload } from './setup/preload';
import { setup } from './setup/setup';

(() => {
  (async () => {
    await setup();
    await preload();
  })();
})();
