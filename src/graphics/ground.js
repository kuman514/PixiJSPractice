import { Graphics } from 'pixi.js';

export function addGround({ pixiJsApp, height }) {
  const ground = new Graphics()
    .rect(0, pixiJsApp.screen.height - height, pixiJsApp.screen.width, height)
    .fill({ color: 0xdddddd });

  pixiJsApp.stage.addChild(ground);
}
