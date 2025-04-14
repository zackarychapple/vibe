import '../styles.css';
import TwitterClone from '../components/TwitterClone';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<TwitterClone />}
      />
      <Route
        path="/feed"
        element={<TwitterClone />}
      />
      <Route
        path="/explore"
        element={<TwitterClone />}
      />
      <Route
        path="/notifications"
        element={<TwitterClone />}
      />
      <Route
        path="/messages"
        element={<TwitterClone />}
      />
      <Route
        path="/profile"
        element={<TwitterClone />}
      />
    </Routes>
  );
}

export default App;