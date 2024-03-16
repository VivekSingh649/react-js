import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './components/Error';
import Services from './Services';
import WebDesing from './Services/WebDesing';
import Header from './components/Header';
import CopyRight from './components/CopyRight';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="our-services" element={<Services />}></Route>
        <Route path="web-designing/:forWeb" element={<WebDesing />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <CopyRight />
    </Router>
  );
}

export default App;
