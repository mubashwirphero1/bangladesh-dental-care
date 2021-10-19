import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './Pages/sharedPages/Footer';
import Header from './Pages/sharedPages/Header';
import AboutUs from "./Pages/webpages/About Us/AboutUs";
import Home from './Pages/webpages/Home/Home';
import Service from "./Pages/webpages/Service/Service";
import Services from "./Pages/webpages/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId" children={<Service />}></Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
