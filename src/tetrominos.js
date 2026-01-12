export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" }, // empty cell
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0]
    ],
    color: "0, 200, 180" // teal
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0]
    ],
    color: "100, 160, 255" // soft blue
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"]
    ],
    color: "255, 145, 200" // pink
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"]
    ],
    color: "255, 230, 100" // pale yellow
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0]
    ],
    color: "120, 255, 140" // mint green
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0]
    ],
    color: "170, 120, 255" // lavender/purple
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0]
    ],
    color: "255, 180, 100" // soft orange/pastel orange — distinct, readable
  }
};

// ✅ Tiny horizontal nudges per piece to fix centering
export const SPAWN_OFFSETS = {
  I: 1,
  O: 0,
  T: 0,
  S: 0,
  Z: 0,
  L: 0,
  J: 1
};

// ✅ Return both shape & type so offsets work
export const randomTetromino = () => {
  const types = "IJLOSTZ";
  const type = types[Math.floor(Math.random() * types.length)];
  return {
    type,          // important!
    ...TETROMINOS[type]
  };
};
