import { Sprite } from 'pixi.js';

export function generateIcon({ spriteName, x, y }) {
  const sprite = Sprite.from(spriteName);
  sprite.anchor.set(0.5);
  sprite.x = x;
  sprite.y = y;
  return sprite;
}
