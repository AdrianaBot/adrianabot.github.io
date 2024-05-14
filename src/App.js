import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Helmet} from "react-helmet";
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adriana's Portfolio</title>
          <meta name="description" content="Personal portfolio with skills & projects" />
          <link rel="canonical" href="http://adrianabot.github.io" />
        </Helmet>
      </div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
