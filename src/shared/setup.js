import { Application, Assets } from 'pixi.js';
import KoishiPng from '../assets/koishi.png';
import HoshinoPng from '../assets/hoshino.png';

export class PixiJsAppSingleton {
  static #pixiJsApp;

  static async #preload() {
    console.log(KoishiPng);
    console.log(HoshinoPng);

    const assets = [
      {
        alias: 'koishi',
        src: KoishiPng,
      },
      {
        alias: 'hoshino',
        src: HoshinoPng,
      },
    ];

    await Assets.load(assets);
  }

  static async getPixiJsApp() {
    if (!PixiJsAppSingleton.#pixiJsApp) {
      console.log('Initiating PixiJS app');
      PixiJsAppSingleton.#pixiJsApp = new Application();

      await PixiJsAppSingleton.#pixiJsApp.init({
        background: '#22b14c',
        resizeTo: window,
      });

      const mainElement = document.querySelector('main');
      mainElement.appendChild(PixiJsAppSingleton.#pixiJsApp.canvas);

      await this.#preload();
    }

    return PixiJsAppSingleton.#pixiJsApp;
  }
}
