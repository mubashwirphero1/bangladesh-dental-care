import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contextAPI/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from './Pages/sharedPages/Footer';
import Header from './Pages/sharedPages/Header';
import AboutUs from "./Pages/webpages/About Us/AboutUs";
import ContactUs from "./Pages/webpages/Contact Us/ContactUs";
import Home from './Pages/webpages/Home/Home';
import NotFound from "./Pages/webpages/NotFound/NotFound";
import Register from "./Pages/webpages/Register/Register";
import Service from "./Pages/webpages/Service/Service";
import Services from "./Pages/webpages/Services/Services";
import SignUp from "./Pages/webpages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId" >
              <Service />
            </PrivateRoute>
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <SignUp></SignUp>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
