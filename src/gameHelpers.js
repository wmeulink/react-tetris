// Base stage dimensions
export const BASE_STAGE_WIDTH = 12;
export const BASE_STAGE_HEIGHT = 20;

// Desktop stage dimensions
export const DESKTOP_STAGE_WIDTH = 14;
export const DESKTOP_STAGE_HEIGHT = 25;

// Block size in pixels
export const BASE_BLOCK_SIZE = 24;
export const MIN_BLOCK_SIZE = 16;


// Determine device type
export const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 1024;

// Responsive stage dimensions
export const getStageDimensions = () => {
  const width = window.innerWidth;

  if (width >= 1024) return { width: DESKTOP_STAGE_WIDTH, height: DESKTOP_STAGE_HEIGHT };
  if (width >= 540) return { width: BASE_STAGE_WIDTH, height: BASE_STAGE_HEIGHT + 5 }; // medium phones
  if (width >= 360) return { width: BASE_STAGE_WIDTH, height: BASE_STAGE_HEIGHT };       // small phones
  return { width: 10, height: 18 }; // tiny phones
};

// Return block size based on screen width
export const getBlockSize = () => {
  if (typeof window === "undefined") return 24;
  const w = window.innerWidth;
  if (w >= 1024) return 24; // desktop
  if (w >= 768) return 22;  // tablet
  if (w >= 540) return 20;  // large phone
  return 16;                // small phone
};

// Create stage array dynamically
export const createStage = () => {
  const { width, height } = getStageDimensions();
  return Array.from(Array(height), () => Array(width).fill([0, "clear"]));
};

// Calculate available space for the stage
export const getDynamicUISpace = () => {
  const tetrisWrapperPadding = 40; // top + bottom
  const asideHeight = 200;          // score, level, rows panel
  const mobileControlsHeight = 80;  // height of mobile buttons
  const totalUI = tetrisWrapperPadding + asideHeight + mobileControlsHeight;

  return totalUI; // total pixels of vertical UI space
};

// Calculate stage scale to fit screen and leave room for UI
// getStageScale.js
export const getStageScale = (uiSpace, stagePixelHeight) => {
  const availableHeight = window.innerHeight - uiSpace;
  const availableWidth = window.innerWidth * 0.95; // leave a little padding for buttons

  // scale based on height and width, pick the smaller one
  const scaleH = availableHeight / stagePixelHeight;
  const scaleW = availableWidth / (stagePixelHeight * (12/20)); // maintain aspect ratio
  let scale = Math.min(scaleH, scaleW);

  // set a minimum scale so blocks don't get tiny on small phones
  const MIN_SCALE = 0.8;
  scale = Math.max(scale, MIN_SCALE);

  return scale;
};


export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // THIS IS SLOWER!!!
  // return player.tetromino.some((row, y) =>
  //   row.some((cell, x) => {
  //     if (cell !== 0) {
  //       return (
  //         !stage[y + player.pos.y + moveY] ||
  //         !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
  //         stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
  //           'clear'
  //       );
  //     }
  //     return false;
  //   })
  // );

  // Using for loops to be able to return (and break). Not possible with forEach
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};
