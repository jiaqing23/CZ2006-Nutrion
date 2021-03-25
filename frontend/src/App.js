import './App.css'
import Navigation from './components/Navbar'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Profile from './pages/Profile'


function App() {
  return (
    <div>
      <Navigation />
      {/* <Registration /> */}
      {/* <Login /> */}
      <Profile />
    </div>
  );
}

export default App;
