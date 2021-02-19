import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import 'bootstrap'
import fire from "./firebase";
import Header from './Components/Jumbotron/header'
import Footer from './Components/Footer/footer'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Listing from "./Components/Cards/listing";
import NewListing from "./pages/NewListing";
import Dashboard from "./pages/Dashboard";
import ProfileDetail from "./pages/ProfileDetail";
import ForgotPassword from "./pages/ForgotPassword";
import ListingDetails from './pages/ListingDetail';
import Search from './pages/Search'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <Router>
      < Search />
      {/* Check if user is signed in 
      {!isLoggedIn
        ? (<>
          {// If they're not signed in, they can only see login or signup
          }
          <Header />
          <Switch>
            <Route path="/Signup"><Signup /></Route>
            <Route path="/"><Login /></Route>
            <Route exact path="/Forgot-password"><ForgotPassword /></Route>
          </Switch>
        </>
        )
        : (<>
          {// If they are signed in, they can see any page that *isn't* login or signup
          }
          <Switch>

            <Route exact path="/listing"><Listing /></Route>
            <Route exact path="/newlisting"><NewListing /></Route>
            <Route exact path="/"><Dashboard /></Route>
            <Route exact path="/profiledetail"><ProfileDetail /></Route>
          </Switch>
        </>
        )}
      <Footer /> */}
    </Router>
  );
}

export default App;
