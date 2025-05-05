import { pixiJsApp } from './app-init';

export async function setup() {
  const mainElement = document.querySelector('main');
  await pixiJsApp.init({ background: '#021f4b', resizeTo: window });
  mainElement.appendChild(pixiJsApp.canvas);
}
