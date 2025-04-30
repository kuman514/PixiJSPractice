import { Texture, TilingSprite } from 'pixi.js';

export function addWaterOverlay({ pixiJsApp }) {
  const waterTexture = Texture.from('overlay');

  // Create a tiling sprite with the water texture and specify the dimensions.
  const waterOverlay = new TilingSprite({
    texture: waterTexture,
    width: pixiJsApp.screen.width,
    height: pixiJsApp.screen.height,
  });

  pixiJsApp.stage.addChild(waterOverlay);

  return waterOverlay;
}

export function animateWaterOverlay({ waterOverlay, amount }) {
  waterOverlay.tilePosition.x -= amount;
  waterOverlay.tilePosition.y -= amount;
}
