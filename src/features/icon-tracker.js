import { Container } from 'pixi.js';

import { PixiJsAppSingleton } from '../shared/setup';

export async function generateIconTracker({ initIcons, initPosition }) {
  const container = new Container();

  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  container.addChild(...initIcons);

  container.position.copyFrom(initPosition);

  const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();
  pixiJsApp.ticker.add((time) => {
    const deltaMs = time.deltaMS;

    container.scale.set(Math.abs(Math.sin(container.rotation / 4)));
    container.rotation -= (deltaMs / 1000) * 2 * Math.PI;
    container.children.forEach((icon) => {
      icon.rotation += (deltaMs / 1000) * 3 * Math.PI;
    });
  });

  pixiJsApp.stage.on('mousemove', (event) => {
    container.position.copyFrom(event.global);
  });
  pixiJsApp.stage.on('pointermove', (event) => {
    container.position.copyFrom(event.global);
  });

  return container;
}
