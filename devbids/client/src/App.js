import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Navbar from "./components/Navbar/Navbar";
import CreateContract from "./pages/CreateContract/CreateContract";
import ContactUs from "./pages/CreateContract/CreateContract";
import Profile from "./pages/Profile/Profile";
// import Homepage from "./pages/Homepage/Homepage.js";

import "./App.css";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route path="/homepage" element={<Homepage />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-contract" element={<CreateContract />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}
export default App;
