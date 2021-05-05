import logo from './logo.svg';
import './App.css';
import Home from './project/home';
import Contact from './project/contact';
import Alumini from './project/alumini';
import Career from './project/career';
import Employees from './project/employees';
import Facilities from './project/facilities';
import Login from './project/login';
import Product from './project/product';
import Register from './project/register';
import Die from './project/die';
import Main from './project/main';
import Tool from './project/tool';
import History from './project/history';
import Management from './project/management';
import Certificate from './project/certificate';
import Zinc from './project/zinc';
import Ferrous from './project/ferrous';
import Precision from './project/precision';
import Machine from './project/machine';
import Fixture from './project/fixture';
import Flow from './project/flow';
import Production from './project/production';
import Part from './project/part';
import Value from './project/value';
import Pre from './project/pre';
import Migration from './project/migration';
import Quality from './project/quality';
import Surface from './project/surface';
import Supply from './project/supply';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      
           <Route exact path="/" component={Main}/>
           <Route exact path="/home">
             <Home />
           </Route>
           <Route path="/alumini" component={Alumini}/> 
           <Route path="/contact" component={Contact}/> 
           <Route path="/career" component={Career}/>
           <Route path="/employees" component={Employees}/>      
           <Route path="/facilities" component={Facilities}/>
           <Route path="/register" component={Register}/> 
           <Route path="/login" component={Login}/>
           <Route path="/product" component={Product}/> 
           <Route path="/die" component={Die}/>
           <Route path="/tool" component={Tool}/>
           <Route path="/history" component={History}/>
           <Route path="/management" component={Management}/>
           <Route path="/certificate" component={Certificate}/>
           <Route path="/zinc" component={Zinc}/>
           <Route path="/ferrous" component={Ferrous}/>
           <Route path="/precision" component={Precision}/>
           <Route path="/machine" component={Machine}/>
           <Route path="/fixture" component={Fixture}/>
           <Route path="/flow" component={Flow}/>
           <Route path="/production" component={Production}/>
           <Route path="/part" component={Part}/>
           <Route path="/value" component={Value}/>
           <Route path="/pre" component={Pre}/>
           <Route path="/migration" component={Migration}/>
           <Route path="/quality" component={Quality}/>
           <Route path="/surface" component={Surface}/>
           <Route path="/supply" component={Supply}/>

      </div>
    </Router>
  );
}

export default App;
