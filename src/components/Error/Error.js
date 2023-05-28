import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './Error.css'

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <header>
      <nav>
          <Link to="/main">Главная</Link>
          <Link to="/info">Информация</Link>
          <Link to="/training">Тренажёр</Link>
        </nav>
      </header>

      <h1>Упс!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
