import { Graphics } from 'pixi.js';

function generateTrunk({ graphics, width, height, color }) {
  graphics.rect(-width / 2, -height, width, height).fill({ color });
}

function generateCrowns({
  graphics,
  level,
  width,
  height,
  color,
  crownStartY,
}) {
  const heightPerLevel = height / level;
  const widthIncrement = width / level;
  for (let i = 0; i < level; i++) {
    const y = -crownStartY + -heightPerLevel * i;
    const levelWidth = width - widthIncrement * i;
    const offset = i < level - 1 ? heightPerLevel / 2 : 0;

    graphics
      .moveTo(-levelWidth / 2, y)
      .lineTo(0, y - heightPerLevel - offset)
      .lineTo(levelWidth / 2, y)
      .fill({ color });
  }
}

export function generateRandomTrees({ pixiJsApp, count, spacing }) {
  const treeGraphics = [];
  for (let i = 0; i < count; i++) {
    const graphics = new Graphics();

    const treeWidth = pixiJsApp.screen.width / 3;
    const treeHeight = (pixiJsApp.screen.height + Math.random() * 1000) / 4;
    const trunkHeight = treeHeight / 4;
    const crownHeight = (treeHeight * 3) / 4;

    generateTrunk({
      graphics,
      width: 30,
      height: trunkHeight,
      color: '#563929',
    });
    generateCrowns({
      graphics,
      level: 4,
      width: treeWidth,
      height: crownHeight,
      crownStartY: trunkHeight,
      color: '#264d3d',
    });

    graphics.x = i * (treeWidth + spacing);
    graphics.y = pixiJsApp.screen.height - 20;

    pixiJsApp.stage.addChild(graphics);
    treeGraphics.push(graphics);
  }

  return treeGraphics;
}

export function animateTrees({ pixiJsApp, trees }) {
  pixiJsApp.ticker.add((time) => {
    const dx = time.deltaTime * 5;
    trees.forEach((tree) => {
      tree.x -= dx;

      if (tree.x <= -tree.width / 2) {
        tree.x += 2 * pixiJsApp.screen.width;
      }
    });
  });
}
