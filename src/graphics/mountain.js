import { Graphics } from 'pixi.js';

function addMountain({ graphics, startX, startY, width, height, color }) {
  graphics
    .moveTo(startX, startY)
    .bezierCurveTo(
      startX + width / 2,
      startY - height,
      startX + width / 2,
      startY - height,
      startX + width,
      startY
    )
    .fill({ color });

  return graphics;
}

export function addMountains({ pixiJsApp, mountains }) {
  const graphics = mountains.reduce(
    (prevGraphics, mountain) =>
      addMountain({
        ...mountain,
        graphics: prevGraphics,
      }),
    new Graphics()
  );

  pixiJsApp.stage.addChild(graphics);
  return graphics;
}

export function animateMountains({ pixiJsApp, graphics }) {
  pixiJsApp.ticker.add((time) => {
    const dx = time.deltaTime * 0.5;
    graphics.forEach((mountainGraphics) => {
      mountainGraphics.x -= dx;
      if (mountainGraphics.x <= -pixiJsApp.screen.width) {
        mountainGraphics.x += pixiJsApp.screen.width * 2;
      }
    });
  });
}
