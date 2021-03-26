import './App.css';
import Homepage from './pages/Homepage';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
// eslint-disable-next-line
import Registration from './pages/Registration';
import Login from './pages/Login'
import MealPlanner from './components/MealPlanner';
import MealPlannerBoard from './components/MealPlannerBoard';
import DishDetail from './pages/DishDetail';

function App() {
  return (
    <div>
      
      <Navigation />
      <Homepage />
      {/* <Registration /> */}
      {/* <DishDetail /> */}
      <Footer />
    </div>
  );
}

export default App;
