import './style.css'
import Spline from '@splinetool/react-spline';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left"></div>
      <div className="nav-right">
        <a href="#">Home</a>
        <a href="#">Timeline</a>
        <a href="#">Project</a>
        <a href="#">Contact Me</a>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main>
      <Navbar />
      <div id="text-overlay">
        &nbsp;<b>UDAY</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>KUMAR</b>
      </div>
      <Spline
        scene="https://prod.spline.design/FE2vGUcBrt6Gyaqs/scene.splinecode"
      />
      <div id="new-div"></div>
        <div id="top-left-div">Hi, I'm Uday Kumar</div>
        <div id="bottom-right-div">Software Engineer | Full Stack Developer | Data analyst</div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
