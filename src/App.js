import logo from './logo.svg';
import './App.css';
import Menu from "./navbar";
import msd from "./images/msd.png";
import First from "./first";
import Second from "./second";
import Third from "./third";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cardila from "./card";
import Home from "./home";
import DevCardila from "./devCard";
import MarCardila from "./marCard";
import DesCardila from "./desCard";
import BusCardila from "./busCard";
import MusCardila from "./musCard";
import BankCardila from "./bankCard";
import Form from "./components/form";
import Pricing from "./premium";
function App() {
  return (
    <div className="App" >
     {/* <img src={msd} alt="bg" style={{zIndex: "-1", width:"100%", height:"800px",filter: "brightness(0.5)"}} /> */}
    {/* <Menu /> */}
    <Router>
    
    <Switch>

    
      <Route path="/" exact component={Home} />
      <Route  path="/lawyers" exact component={Cardila}/>
      <Route  path="/lawyers/environmental" exact component={DevCardila}/>
      <Route  path="/lawyers/corporate" exact component={MarCardila}/>
      <Route  path="/lawyers/civil" exact component={DesCardila}/>
      <Route  path="/lawyers/criminal" exact component={BusCardila}/>
      <Route  path="/lawyers/family" exact component={MusCardila}/>
      <Route  path="/lawyers/bankruptcy" exact component={BankCardila}/>
      <Route path="/form" exact component={Form} />
      <Route path="/pricing" exact component={Pricing} />


      
    </Switch>

    </Router>
      
    </div>
  );
}

export default App;
