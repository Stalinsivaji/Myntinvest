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
import Login from './views/Login';
import Signup from './views/Signup';
import Privacy_Policy from './views/Privacy_Policy';
import Blog from './views/Blog';
import FAQ from './components/sections/FAQ'
import Investor_Signup from './components/sections/Investor_Signup';
import Investors_Terms from './components/sections/Investors_Terms';
import Investors_Dashboard from './components/sections/Investors_Dashboards';
import Investors_Kyc from './components/sections/Investors_Kyc';
import Investors_Ottp from './components/sections/Investors_Ottp';
import Investors_Pan from './components/sections/Investors_Pan';
import Investors_Bank from './components/sections/Investors_Bank';
import Startup_Login from './components/sections/Startup_Login';
import Startup_Dashboard from './components/sections/Startup_Dashboard';
import Startup_Company from './components/sections/Startup_Company';


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
          <AppRoute exact path="/Login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/Investor_Signup" component={Investor_Signup} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Terms" component={Investors_Terms} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Dashboard" component={Investors_Dashboard} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Kyc" component={Investors_Kyc} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Ottp" component={Investors_Ottp} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Pan" component={Investors_Pan} layout={LayoutDefault} />
          <AppRoute exact path="/Investors_Bank" component={Investors_Bank} layout={LayoutDefault} />
          <AppRoute exact path="/Signup" component={Signup} layout={LayoutDefault} />
          <AppRoute exact path="/Startup_Login" component={Startup_Login} layout={LayoutDefault} />
          <AppRoute exact path="/Startup_Dashboard" component={Startup_Dashboard} layout={LayoutDefault} />
          <AppRoute exact path="/Startup_Company" component={Startup_Company} layout={LayoutDefault} />
          <AppRoute exact path="/Privacy_Policy" component={Privacy_Policy} layout={LayoutDefault} />
          <AppRoute exact path="/Blog" component={Blog} layout={LayoutDefault} />
          <AppRoute exact path="/FAQ" component={FAQ} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;