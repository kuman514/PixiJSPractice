import { Sprite } from 'pixi.js';

export function addBackground(pixiJsApp) {
  const background = Sprite.from('background');
  background.anchor.set(0.5);

  if (pixiJsApp.screen.width > pixiJsApp.screen.height) {
    background.width = pixiJsApp.screen.width * 1.2;
    background.scale.y = background.scale.x;
  } else {
    background.height = pixiJsApp.screen.height * 1.2;
    background.scale.x = background.scale.y;
  }

  background.x = pixiJsApp.screen.width / 2;
  background.y = pixiJsApp.screen.height / 2;

  pixiJsApp.stage.addChild(background);
}
