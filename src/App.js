import { Switch } from '@headlessui/react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/sharedPages/Footer';
import Header from './Pages/sharedPages/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route>

          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
