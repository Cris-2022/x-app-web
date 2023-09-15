import { Routes, Route } from 'react-router-dom';
import { Home, Preferences, Products, Orders, Tickets } from './pages';
import Layouts from './layouts';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Layouts}>
        <Route index Component={Home} />
        <Route path='products' Component={Products} />
        <Route path='login' Component={Login} />
        <Route path='orders' Component={Orders} />
        <Route path='preferences' Component={Preferences} />
        <Route path='tickets' Component={Tickets} />
      </Route>
    </Routes>
  );
}

export default App;
