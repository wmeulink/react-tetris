import React from "react";
import Header from '../Home/Header';
import Home from '../Home/Home';
import Tetris from '../components/Tetris';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function HomeRoute() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="../Home/Header.js" element={<Header />} />
            <Route path="../components/Tetris.js" element={<Tetris />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }