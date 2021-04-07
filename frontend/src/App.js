import './App.css';
import Navigation from './components/Navbar';
import Profile from './pages/Profile';
import Footer from './components/Footer';
// eslint-disable-next-line
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login'
import MealPlanner from './components/MealPlanner';
import PlannerCard from './components/PlannerCard'
import MealPlannerBoard from './components/MealPlannerBoard';
import DishDetail from './pages/DishDetail';
import SearchResult from './pages/SearchResult';
import MealPlanResult from './pages/MealPlanResult';

function App() {
  return (
    <>
      <div>
        {/*<Navigation /> */}
        {/* <Profile /> */}
        {/*<MealPlanner />*/}
        {/* <Homepage /> */}
        {/* <Registration /> */}
        {/* <DishDetail /> 
        {/* <Login /> */}
         {/* <SearchResult /> */}
          <MealPlanResult />
      </div>
      <Footer />
    </>
  );
}

export default App;
