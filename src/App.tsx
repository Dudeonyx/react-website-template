import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import { useCallback, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), [setIsOpen]);

  return (
    <Router>
      <div className="App">
        <SideBar {...{ isOpen, toggleIsOpen }} />
        <NavBar {...{ toggleIsOpen }} />
      </div>
    </Router>
  );
}

export default App;
