import { Application, Assets, Sprite } from 'pixi.js';

(() => {
  const mainElement = document.querySelector('main');
  (async () => {
    // Await the app initializing.
    const pixiJsApp = new Application();
    await pixiJsApp.init({ background: '#22b14c', resizeTo: window });
    mainElement.appendChild(pixiJsApp.canvas);

    // Images load asynchronously. So, to get texture, we need to await the assets to be loaded.
    const texture = await Assets.load(
      'https://pbs.twimg.com/media/GNe66_yaMAMCshU.jpg'
    );
    const koishi = new Sprite(texture);

    // Set sprite position and size.
    koishi.anchor.set(0.5);
    koishi.x = pixiJsApp.screen.width / 2;
    koishi.y = pixiJsApp.screen.height / 2;
    koishi.width /= 2;
    koishi.height /= 2;

    // Append to the stage.
    pixiJsApp.stage.addChild(koishi);
  })();
})();
