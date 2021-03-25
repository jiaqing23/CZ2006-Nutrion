import './App.css';
import Homepage from './pages/Homepage';
import Navigation from './components/Navbar';
// eslint-disable-next-line
import Registration from './pages/Registration';
import Login from './pages/Login'
import MealPlanner from './components/MealPlanner';
import MealPlannerBoard from './components/MealPlannerBoard'
import SearchResult from './pages/SearchResult';

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

//<Homepage />
  //    <Navigation />
