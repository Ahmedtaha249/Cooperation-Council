import React, { useState, createContext } from "react";
import Home from "./components/home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import logOut from "./components/logout/logOut"
import Navigation from "../src/components/navigation/Navigation";
import About from "./components/about/About";
import "./App.css";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Weather from "../src/components/ui/weather";
import Attractions from "../src/components/ui/attractions";
import Cities from "../src/components/ui/cities";
import Footer from "../src/components/footer/footer";
import { UpdateFlightBooking } from "./components/updateFlightBooking/UpdateFlightBooking";
import Contact from "./components/contact/Contact";
import SideBar from "./components/sidebar";
import { MyBooking } from "./components/myBooking/MyBooking";


export const userSign = createContext();

export const userContext = createContext();
const App = () => {
  const [adult, setAdult] = useState();
  const [flights, setflights] = useState();
  let { path, url } = useRouteMatch();
  const [token, setToken] = useState();
  const state = { token, setToken };
  const [email, setEmail] = useState("");
  const [book, setBook] = useState();
  const [password, setPassword] = useState("");
  return (
    <div className="App-s">
      <div className="App">
        <Route
          path={`${path}/myBooking`}
          render={() => (
            <MyBooking
              flights={flights}
              state={state}
              book={book}
              adult={adult}
            />
          )} ///
        />
        <Switch>
          <userContext.Provider value={state}>
            <Navigation />

            <div className="navPlus" />
            <Route
              path={`${path}/Update`}
              render={() => (
                <UpdateFlightBooking value={flights} state={state} />
              )}
            />


            <userSign.Provider
              value={{ email, password, setEmail, setPassword }}
            >
              <Route path={`${path}/signUp`} component={SignUp} />
              <Route path={`${path}/login`} component={Login} />


              <Route path={`${path}/logout` }component={logOut}/>

            </userSign.Provider>

            <Route path={`${path}/contact`} component={Contact} />
            <Route path={`${path}/About`} component={About} />
            <Route
              path={`${path}/home`}
              render={() => <Home setvalue={setflights} setadult={setAdult} />}
            />
            <Route
              path={`${path}/Table`}
              render={() => (
                <Table
                  value={flights}
                  state={state}
                  adult={adult}
                  setBook={setBook}
                /> //
              )}
            />
            {/* <Route exact path={path} component={Weather}></Route> */}
        <Route exact path={'/main'} component={Cities}></Route>
        <Route exact path={'/main'} component={Attractions}></Route>
        <Route exact path={'/main'} component={SideBar}></Route>
          </userContext.Provider>
        </Switch>
        
        <Footer/>

      </div>
    </div>
  );
};
export default App;
