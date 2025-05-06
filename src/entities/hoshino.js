import { Sprite } from 'pixi.js';

export function generateHoshino({ x, y }) {
  const sprite = Sprite.from('hoshino');
  sprite.anchor.set(0.5);
  sprite.x = x;
  sprite.y = y;
  return sprite;
}
