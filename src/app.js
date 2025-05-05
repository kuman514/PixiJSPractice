import { PixiJsAppSingleton } from './shared/setup/app-init';

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
