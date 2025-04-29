import { DisplacementFilter, Sprite } from 'pixi.js';

export function addDisplacementEffect({ pixiJsApp }) {
  const displacementSprite = Sprite.from('displacement');
  const filter = new DisplacementFilter({
    sprite: displacementSprite,
    scale: 70,
  });
  pixiJsApp.stage.filters = [filter];
}
