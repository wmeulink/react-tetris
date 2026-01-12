import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newStage =>
      newStage.reduce((acc, row) => {
        if (row.every(cell => cell[0] !== 0)) {
          setRowsCleared(prev => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
        } else {
          acc.push(row);
        }
        return acc;
      }, []);

    const updateStage = prevStage => {
      // Copy previous stage but **keep merged cells intact**
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            const stageY = y + player.pos.y;
            const stageX = x + player.pos.x;

            // Only overwrite if it's not already merged
            if (newStage[stageY] && newStage[stageY][stageX][1] !== "merged") {
              newStage[stageY][stageX] = [
                value,
                `${player.collided ? "merged" : "clear"}`
              ];
            }
          }
        });
      });

      // Handle collision
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
