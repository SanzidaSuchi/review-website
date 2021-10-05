
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Admission from './components/Admission/Admission';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/services">
             <Services></Services>
          </Route>
          <Route path="/admission">
             <Admission></Admission>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
