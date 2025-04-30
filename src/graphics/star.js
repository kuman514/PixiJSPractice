import { Graphics } from 'pixi.js';

export function addStars({ pixiJsApp, amount }) {
  const graphics = new Graphics();
  for (let i = 0; i < amount; i++) {
    const x = (i * 0.78695 * pixiJsApp.screen.width) % pixiJsApp.screen.width;
    const y = (i * 0.9382 * pixiJsApp.screen.height) % pixiJsApp.screen.height;
    const radius = 3 + Math.random() * 10;
    const rotation = Math.random() * Math.PI * 2;
    graphics
      .star(x, y, 5, radius, 0, rotation)
      .fill({ color: 0xffdf00, alpha: radius / 5 });
  }
  pixiJsApp.stage.addChild(graphics);
}
