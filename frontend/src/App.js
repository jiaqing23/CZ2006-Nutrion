import './App.css';
import Homepage from './pages/Homepage';
import Navigation from './components/Navbar';
// eslint-disable-next-line
import Registration from './pages/Registration';

function App() {
  return (
    <div>
      <Homepage />
      <Navigation />
      {/* <Registration /> */}
    </div>
  );
}

export default App;
