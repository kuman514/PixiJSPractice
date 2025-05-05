import { PixiJsAppSingleton } from './shared/setup';

(() => {
  (async () => {
    await PixiJsAppSingleton.getPixiJsApp();
    await PixiJsAppSingleton.getPixiJsApp();
    await PixiJsAppSingleton.getPixiJsApp();
    await PixiJsAppSingleton.getPixiJsApp();
    await PixiJsAppSingleton.getPixiJsApp();
    await PixiJsAppSingleton.getPixiJsApp();
  })();
})();
