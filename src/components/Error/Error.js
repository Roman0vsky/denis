import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './Error.css'

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <header>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/info">Info</Link>
          <Link to="/audio">Audio</Link>
          <Link to="/training">Training</Link>
        </nav>
      </header>

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
