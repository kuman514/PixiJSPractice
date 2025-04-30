import { Sprite } from 'pixi.js';

export function addFishes({ pixiJsApp, fishContainer, fishes, fishCount }) {
  const fishAssets = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];
  for (let i = 0; i < fishCount; i++) {
    const fishAsset = fishAssets[Math.floor(Math.random() * fishAssets.length)];
    const fish = Sprite.from(fishAsset);

    fish.anchor.set(0.5);

    fish.direction = Math.random() * Math.PI * 2;
    fish.speed = 2 + Math.random() * 2;
    fish.turnSpeed = Math.random() - 0.8;

    fish.x = Math.random() * pixiJsApp.screen.width;
    fish.y = Math.random() * pixiJsApp.screen.height;
    fish.scale.set(0.5 + Math.random() * 0.2);

    fishContainer.addChild(fish);
    fishes.push(fish);
  }
}

export function animateFishes({ pixiJsApp, fishes, time }) {
  // const delta = time.deltaTime;

  const stagePadding = 100;
  const boundWidth = pixiJsApp.screen.width + stagePadding * 2;
  const boundHeight = pixiJsApp.screen.height + stagePadding * 2;

  fishes.forEach((fish) => {
    fish.direction += fish.turnSpeed * 0.01;
    fish.x += Math.sin(fish.direction) * fish.speed;
    fish.y += Math.cos(fish.direction) * fish.speed;
    fish.rotation = -fish.direction - Math.PI / 2;

    if (fish.x < -stagePadding) {
      fish.x += boundWidth;
    }
    if (fish.x > pixiJsApp.screen.width + stagePadding) {
      fish.x -= boundWidth;
    }
    if (fish.y < -stagePadding) {
      fish.y += boundHeight;
    }
    if (fish.y > pixiJsApp.screen.height + stagePadding) {
      fish.y -= boundHeight;
    }
  });
}
