import { Container } from 'pixi.js';
import { PixiJsAppSingleton } from '../shared/setup';

export async function generateIconCloud({ initIcons }) {
  const container = new Container();

  const fov = 20;
  const speed = 2500;

  const icons = initIcons.map((icon) => ({
    sprite: icon,
    x: 0,
    y: 0,
    z: 0,
  }));

  function randomize({ icon, isInitial }) {
    icon.z = isInitial ? Math.random() * 2000 : Math.random() * 1000 + 2000;

    // Calculate icon positions with radial random coordinate so no icon hits the camera.
    const radian = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;

    icon.x = Math.cos(radian) * distance;
    icon.y = Math.sin(radian) * distance;
  }

  icons.forEach((icon) => {
    randomize({ icon, isInitial: true });
    container.addChild(icon.sprite);
  });

  const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();
  pixiJsApp.ticker.add((time) => {
    const moveAmount = (time.deltaMS / 1000) * speed;
    icons.forEach((icon) => {
      if (icon.z < 0) {
        randomize({ icon, isInitial: false });
      }

      icon.z -= moveAmount;

      // Map icon 3d position to 2d with really simple projection
      icon.sprite.x =
        icon.x * (fov / icon.z) * pixiJsApp.renderer.screen.width +
        pixiJsApp.renderer.screen.width / 2;
      icon.sprite.y =
        icon.y * (fov / icon.z) * pixiJsApp.renderer.screen.width +
        pixiJsApp.renderer.screen.height / 2;

      // Calculate icon scale & rotation.
      const distanceScale = Math.max(0, (2000 - icon.z) / 2000);

      icon.sprite.scale.set(distanceScale);
    });
  });

  return container;
}
