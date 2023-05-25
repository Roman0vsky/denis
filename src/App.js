import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/info">Info</Link>
          <Link to="/training">Training</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
