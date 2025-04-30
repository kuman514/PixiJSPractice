import { pixiJsApp } from './app-init';

export async function setup() {
  const mainElement = document.querySelector('main');
  await pixiJsApp.init({ background: '#22b14c', resizeTo: window });
  mainElement.appendChild(pixiJsApp.canvas);
}
