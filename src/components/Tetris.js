import React, { useState, useEffect } from "react";
import { checkCollision, createStage, getDynamicUISpace, getStageDimensions } from "../gameHelpers";
import './styles/Tetris.css';

// Hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import MobileControls from "./MobileControls";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const { width } = getStageDimensions();
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer(width);

  const initialStage = createStage();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer, initialStage);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const uiSpace = getDynamicUISpace();

  /* -------------------- MOVEMENT -------------------- */
  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const moveLeft = () => { if (!paused && !gameOver) movePlayer(-1); };
  const moveRight = () => { if (!paused && !gameOver) movePlayer(1); };
  const rotatePiece = () => { if (!paused && !gameOver) playerRotate(stage, 1); };

  /* -------------------- RESIZE -------------------- */
  useEffect(() => {
    const handleResize = () => {
      setStage(createStage());
      resetPlayer(getStageDimensions().width);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resetPlayer, setStage]);

  /* -------------------- DROP -------------------- */
  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const softDrop = () => {
    if (!paused && !gameOver && !checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    }
  };

  /* -------------------- KEYBOARD -------------------- */
  const handleKeyDown = ({ keyCode }) => {
    if (paused || gameOver) return;
    if (keyCode === 37) moveLeft();
    else if (keyCode === 39) moveRight();
    else if (keyCode === 40) softDrop();
    else if (keyCode === 38) rotatePiece();
  };

  const handleKeyUp = ({ keyCode }) => {
    if (!gameOver && keyCode === 40 && !paused) {
      setDropTime(1000 / (level + 1));
    }
  };

  /* -------------------- GAME FLOW -------------------- */
  const resetStageInPlace = () => {
    setStage(prev => prev.map(row => row.map(() => [0, "clear"])));
  };

  const startGame = () => {
    const newStage = createStage();
    setStage(newStage);
    resetPlayer(getStageDimensions().width);
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    setPaused(false);
    setDropTime(1000);
    setGameStarted(true);
  };

  useInterval(() => {
    if (!paused && !gameOver) drop();
  }, dropTime);

  /* -------------------- RENDER -------------------- */
  return (
    <div className="tetris-wrapper" tabIndex="0" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <div className="tetris">
        <Stage stage={stage} paused={paused} uiSpace={uiSpace} />

        <MobileControls
          moveLeft={moveLeft}
          moveRight={moveRight}
          drop={softDrop}
          rotate={rotatePiece}
          className="mobile-controls"
        />

        <aside>
          {gameOver && <Display gameOver text="Game Over" />}

          <div className="aside-div">
            <Display text={`Score: ${score}`} />
            <Display text={`Rows: ${rows}`} />
            <Display text={`Level: ${level}`} />
          </div>

          <StartButton
            callback={() => {
              if (!gameStarted || gameOver) startGame();
              else setPaused(prev => !prev);
            }}
            text={!gameStarted || gameOver ? "Start Game" : paused ? "Resume" : "Pause"}
          />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
