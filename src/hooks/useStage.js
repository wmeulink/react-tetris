import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newStage =>
      newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
        } else {
          ack.push(row);
        }
        return ack;
      }, []);

    const updateStage = prevStage => {
      // First flush the stage but keep merged blocks intact to prevent flicker
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Check for collision at spawn
      let spawnCollision = false;

      // Draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            const stageY = y + player.pos.y;
            const stageX = x + player.pos.x;

            if (newStage[stageY] && newStage[stageY][stageX][1] === "merged") {
              spawnCollision = true;
            } else {
              newStage[stageY][stageX] = [
                value,
                `${player.collided ? "merged" : "clear"}`
              ];
            }
          }
        });
      });

      if (spawnCollision) {
        // Prevent overlap at top
        return prevStage;
      }

      // Handle collided piece
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
