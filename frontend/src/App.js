import './App.css';
import Navigation from './Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login'
import MealPlanner from './components/MealPlanner';
import MealPlannerBoard from './components/MealPlannerBoard'
import PlannerCard from './components/PlannerCard'


function App() {
  return (
    <div>
      <MealPlanner/>
    </div>
  );
}

export default App;
