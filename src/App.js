import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/main">Главная</Link>
          <Link to="/info">Информация</Link>
          <Link to="/training">Тренажёр</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
