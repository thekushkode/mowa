import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Donate from './components/Donate';
import Team from './components/Team';
import ContactPage from './components/Contact';
import Events from './components/Events';
import Faq from './components/Faq';
import InTheNews from './components/InTheNews';
import GetMeals from './components/GetMeals';
import Volunteer from './components/Volunteer';
import HomeRepair from './components/HomeRepair';
import DinnerServed from './components/DinnerServed';
import ThankYou from './components/DonationThankYou';
import OurKitchen from './components/OurKitchen';
import EmailThankYou from './components/EmailThankYou';

ReactGA.initialize('UA-178438543-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.pageview('/');
ReactGA.pageview('/donate');
ReactGA.pageview('/getmeals');
ReactGA.pageview('/volunteer');
ReactGA.pageview('/team');
ReactGA.pageview('/contact');
ReactGA.pageview('/events');
ReactGA.pageview('/inthenews');
ReactGA.pageview('/faq');
ReactGA.pageview('/homerepairs');
ReactGA.pageview('/ourkitchen');
ReactGA.pageview('/dinnerisserved');
ReactGA.pageview('/thankyou');

function App() {
  return (
    
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/donate' component={Donate} />
      <Route exact path='/getmeals' component={GetMeals} />
      <Route exact path='/volunteer' component={Volunteer} />
      <Route exact path='/homerepairs' component={HomeRepair} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/events' component={Events} />
      <Route exact path='/inthenews' component={InTheNews} />
      <Route exact path='/faq' component={Faq} />
      <Route exact path='/dinnerisserved' component={DinnerServed} />
      <Route exact path='/ourkitchen' component={OurKitchen} />
      <Route exact path='/thankyou' component={ThankYou} />
      <Route exact path='/emailthankyou' component={EmailThankYou} />
    </Switch>
  );
}

export default App;
