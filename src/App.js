import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function Aboutus() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>This page provides information about us.</p>
    </div>
  );
}

function Contactus() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>You can contact us through this page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header>
          <h1>My React Website</h1>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </header>

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/aboutus"
              element={<Aboutus />}
            />

            <Route
              path="/contactus"
              element={<Contactus />}
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
