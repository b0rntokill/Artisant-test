import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { Products } from "../../pages/products";

// TODO цикл редирикта на products сделан специально, можно было и 404 страницу сообразить.

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Products} element={<Products />} />
      <Route path="*" element={<Navigate to={AppRoute.Products} />} />
    </Routes>
  );
}

export default App;
