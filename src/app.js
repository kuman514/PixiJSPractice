import { Application } from 'pixi.js';

(() => {
  const mainElement = document.querySelector('main');
  (async () => {
    const pixiJsApp = new Application();
    await pixiJsApp.init({ background: '#22b14c', resizeTo: window });
    mainElement.appendChild(pixiJsApp.canvas);
  })();
})();
