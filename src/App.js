import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Deals from './views/Deals';
import Pitch from './views/Pitch';
import Reviews from './views/Reviews';
import Investors from './views/Investors';
import Realestate from './views/Realestate';
import Founders from './views/Founders';
import Login from './components/sections/Login';
import Signup from './components/sections/Signup';
import Privacy_Policy from './components/sections/Privacy_Policy';
import Blog from './views/Blog';
import FAQ from './components/sections/FAQ'
import Learn from './views/Learn';
import How_It_Works from './components/sections/How_It_Works';
import Private_Deals from './views/Private_Deals';

//Investors
import Investor_Signup from './components/sections/Investor_Signup';
import Investors_Terms from './components/sections/Investors_Terms';
import Investors_Dashboard from './components/sections/Investors_Dashboards';
import Portfolio from './components/sections/Portfolio';
import Investors_Analytics from './components/sections/Investors_Analystics';
import Investors_Details from './components/sections/Investors_Details';
import Investors_Verification from './components/sections/Investors_Verification';
import Pancard_Details from './components/sections/Pancard_Details';
import Payment_Details from './components/sections/Payment_Details';

//Startup
import Startup_Login from './components/sections/Startup_Login';
import Startup_Dashboard from './components/sections/Startup_Dashboard';
import Company_Info from './components/sections/Company_Info';
import Team_Info from './components/sections/Team_Info';
import Upload_Pitch from './components/sections/Upload_Pitch';
import Create_Pitch from './components/sections/Create_Pitch';
import Solution from './components/sections/Solution';
import Product from './components/sections/Product';
import Transaction from './components/sections/Transaction';
import Business_Model from './components/sections/Business_Model';
import Competition from './components/sections/Competition';
import Customer from './components/sections/Customer';
import Usage from './components/sections/Usage';
import Vision from './components/sections/Vision';
import Potential_Returns from './components/sections/Potential_Returns';

// Analystics
import Analystics from './components/sections/Analystics';
import Analystics_Chart from './components/sections/Analystics_Chart';

// Campaign
import Campaign from './components/sections/Campaign';
import Campaign_Investors from './components/sections/Campaign_Investors';
import Campaign_Banner from './components/sections/Campaign_Banner';
import Campaign_FAQ from './components/sections/Campaign_FAQ';
import Campaign_Press from './components/sections/Campaign_Press';

import Risks from './components/sections/Risks';
import Raise from './components/sections/Raise'
import Terms_Condition from './components/sections/Terms_Condition';

import Admin_Login from './components/sections/Admin_Login';
import Admin_Dashboard from './components/sections/Admin_Dashboard';
import Admin_Startup from './components/sections/Admin_Startup';
import Admin_Investor from './components/sections/Admin_Investor';
import Admin_Accounts from './components/sections/Admin_Accounts';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Deals" component={Deals} layout={LayoutDefault} />
          <AppRoute exact path="/Pitch" component={Pitch} layout={LayoutDefault} />
          <AppRoute exact path="/Reviews" component={Reviews} layout={LayoutDefault} />
          <AppRoute exact path="/Investors" component={Investors} layout={LayoutDefault} />
          <AppRoute exact path="/Realestate" component={Realestate} layout={LayoutDefault} />
          <AppRoute exact path="/Founders" component={Founders} layout={LayoutDefault} />
          <AppRoute exact path="/Learn" component={Learn} layout={LayoutDefault} />
          <AppRoute exact path="/How_It_Works" component={How_It_Works} layout={LayoutDefault} />
          <AppRoute exact path="/Private_Deals" component={Private_Deals} layout={LayoutDefault} />
          <AppRoute exact path="/Risks" component={Risks} layout={LayoutDefault} /> 
          <AppRoute exact path="/Terms_Condition" component={Terms_Condition} layout={LayoutDefault} /> 

          <AppRoute exact path="/Login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/Investor_Signup" component={Investor_Signup} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Terms" component={Investors_Terms} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Dashboard" component={Investors_Dashboard} layout={LayoutDefault} />
          <AppRoute exact path="/Portfolio" component={Portfolio} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Analystics" component={Investors_Analytics} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Details" component={Investors_Details} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Verification" component={Investors_Verification} layout={LayoutDefault} />
          <AppRoute exact path="/Pancard_Details" component={Pancard_Details} layout={LayoutDefault} />
          <AppRoute exact path="/Payment_Details" component={Payment_Details} layout={LayoutDefault} />
 

          <AppRoute exact path="/Campaign" component={Campaign} layout={LayoutDefault} />
          <AppRoute exact path="/Campaign_Investors" component={Campaign_Investors} layout={LayoutDefault} />
          <AppRoute exact path="/Campaign_Banner" component={Campaign_Banner} layout={LayoutDefault} />
          <AppRoute exact path="/Campaign_FAQ" component={Campaign_FAQ} layout={LayoutDefault} />
          <AppRoute exact path="/Campaign_Press" component={Campaign_Press} layout={LayoutDefault} />

          <AppRoute exact path="/Analystics" component={Analystics} layout={LayoutDefault} />
          <AppRoute exact path="/Analystics_Chart" component={Analystics_Chart} layout={LayoutDefault} />
          
          <AppRoute exact path="/Signup" component={Signup} layout={LayoutDefault} />
          <AppRoute exact path="/Startup_Login" component={Startup_Login} layout={LayoutDefault} />
          <AppRoute exact path="/Startup_Dashboard" component={Startup_Dashboard} layout={LayoutDefault} />
          <AppRoute exact path="/Company_Info" component={Company_Info} layout={LayoutDefault} />
          <AppRoute exact path="/Team_Info" component={Team_Info} layout={LayoutDefault} />
          <AppRoute exact path="/Upload_Pitch" component={Upload_Pitch} layout={LayoutDefault} />
          <AppRoute exact path="/Create_Pitch" component={Create_Pitch} layout={LayoutDefault} />
          <AppRoute exact path="/Solution" component={Solution} layout={LayoutDefault} />
          <AppRoute exact path="/Product" component={Product} layout={LayoutDefault} />
          <AppRoute exact path="/Transaction" component={Transaction} layout={LayoutDefault} />
          <AppRoute exact path="/Business_Model" component={Business_Model} layout={LayoutDefault} />
          <AppRoute exact path="/Competition" component={Competition} layout={LayoutDefault} />
          <AppRoute exact path="/Customer" component={Customer} layout={LayoutDefault} />
          <AppRoute exact path="/Usage" component={Usage} layout={LayoutDefault} />
          <AppRoute exact path="/Vision" component={Vision} layout={LayoutDefault} />
          <AppRoute exact path="/Potential_Returns" component={Potential_Returns} layout={LayoutDefault} />
         
          <AppRoute exact path="/Privacy_Policy" component={Privacy_Policy} layout={LayoutDefault} />
          <AppRoute exact path="/Blog" component={Blog} layout={LayoutDefault} />
          <AppRoute exact path="/FAQ" component={FAQ} layout={LayoutDefault} />
          <AppRoute exact path="/Raise" component={Raise} layout={LayoutDefault} />

          <AppRoute exact path="/Admin_Login" component={Admin_Login} layout={LayoutDefault} />
          <AppRoute exact path="/Admin_Dashboard" component={Admin_Dashboard} layout={LayoutDefault} />
          <AppRoute exact path="/Admin_Startup" component={Admin_Startup} layout={LayoutDefault} />
          <AppRoute exact path="/Admin_Investor" component={Admin_Investor} layout={LayoutDefault} />
          <AppRoute exact path="/Admin_Accounts" component={Admin_Accounts} layout={LayoutDefault} />

        </Switch>
      )} />
  );
}

export default App;