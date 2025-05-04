import { Graphics } from 'pixi.js';

export function addGround({ pixiJsApp, height }) {
  const ground = new Graphics()
    .rect(0, pixiJsApp.screen.height - height, pixiJsApp.screen.width, height)
    .fill({ color: '#dddddd' });

  pixiJsApp.stage.addChild(ground);
}

export function addPlanks({ pixiJsApp, height, startY, count }) {
  const planks = [];
  const slice = pixiJsApp.screen.width / (count * 5);
  const widthPerPlank = slice * 4;

  for (let i = 0; i < count; i++) {
    const plank = new Graphics()
      .rect(slice * 5 * i, startY, widthPerPlank, height)
      .fill({ color: '#241811' });

    pixiJsApp.stage.addChild(plank);
    planks.push(plank);
  }

  return planks;
}

export function addRail({ pixiJsApp, height, startY }) {
  const rail = new Graphics()
    .rect(0, startY, pixiJsApp.screen.width, height)
    .fill({ color: '#5c5c5c' });

  pixiJsApp.stage.addChild(rail);
}
