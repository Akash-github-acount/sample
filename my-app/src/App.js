import logo from './logo.svg';
import './App.css';
//import ContactUs from './Other/ContactUs';
//import Acknowledgement from './Other/acknowledgement';
//import LoginFormNew from './Components/LoginFormNew';
//import NavBar1 from './Components/NavBar1';
import Footer from './Components/Footer';
//import LoginUser from './Components/LoginUser';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
//mport { navigation } from './Components/Navigation';
import Home from './Components/Home';
//import SignUp from './Components/SignUp'
import { Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <div className="content-wrap">
      {/* <Footer/> */}
      <Home/>
      {/* <SignIn/>
      <SignUp/> */}
      {/* <navigation/> */}
      {/* <SignUp/> */}
      {/* <LoginUser/> */}
      <switch>
     
        <Route path="/" component={Home} exact />
        <Route path="/login-user" component={SignIn} exact />
        <Route path="/register-user" component={SignUp} exact />
      
    </switch>
    <Footer/>
    </div>
    </div>
    
  );
}

export default App;
