import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <WhatWeDo/>
      <HowItWorks/>
      <GetStarted/>
    </div>
  );
}

export default App;
