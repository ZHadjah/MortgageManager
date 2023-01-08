import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "../src/styles/styles.css";

import Home from "./pages/home";
import Code from "./pages/code";
import Solve from "./pages/solve";

function App() {
  return (
    <>
       <Navbar githubLink='https://github.com/ZHadjah/tacocatgrammar' portfolioLink='https://zachhadjah.netlify.app/' />


       <h1>TESTING</h1>
       <h1>TESTING</h1>
       <h1>TESTING</h1>
       <h1>TESTING</h1>
       <h1>TESTING</h1>

      {/* <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/solve" element={<Solve />} />
        </Routes>
      </div> */}




    </>
  );
}
export default App;
