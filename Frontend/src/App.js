import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { UserProvider } from "./context/UserContext";
import Header from "./components/header";
import Home from "./components/hero";

import Teams from "./components/teams";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CollegePredictor from "./components/CollegePredictor";
import RankPredictor from "./components/RankPredictor";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <ErrorBoundary>
            <header id="header">
              <Header />
            </header>
            <div className="App" style={{ color: "white" }}>
              <main>
                <Routes>
                  <Route element={<Home />} path="/"></Route>
                  <Route element={<Teams />} path="/teams"></Route>
                  <Route element={<Contact />} path="/contact"></Route>
                  <Route
                    element={<CollegePredictor />}
                    path="/collegepredictor"
                  ></Route>
                  <Route
                    element={<RankPredictor />}
                    path="/rankpredictor"
                  ></Route>
                  <Route element={<Login />} path="/login"></Route>
                  <Route element={<Logout />} path="/logout"></Route>
                  <Route element={<Register />} path="/register"></Route>
                </Routes>
              </main>
            </div>
            <ToastContainer />
          </ErrorBoundary>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
