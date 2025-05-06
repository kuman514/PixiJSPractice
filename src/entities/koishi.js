import { Sprite } from 'pixi.js';

export function generateKoishi({ x, y }) {
  const sprite = Sprite.from('koishi');
  sprite.anchor.set(0.5);
  sprite.x = x;
  sprite.y = y;
  return sprite;
}
