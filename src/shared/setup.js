import { Application } from 'pixi.js';

export class PixiJsAppSingleton {
  static #pixiJsApp;

  static async getPixiJsApp() {
    if (!PixiJsAppSingleton.#pixiJsApp) {
      console.log('Initiating PixiJS app');
      PixiJsAppSingleton.#pixiJsApp = new Application();
      const mainElement = document.querySelector('main');
      await PixiJsAppSingleton.#pixiJsApp.init({
        background: '#22b14c',
        resizeTo: window,
      });
      mainElement.appendChild(PixiJsAppSingleton.#pixiJsApp.canvas);
    }
    return PixiJsAppSingleton.#pixiJsApp;
  }
}
