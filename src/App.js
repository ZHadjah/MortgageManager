import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "../src/styles/styles.css";
import Home from "./components/pages/home";
import Code from "./components/pages/code";
import Solve from "./components/pages/solve";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
       <Navbar githublink='https://github.com/ZHadjah/MortgageManager' portfoliolink='https://zachhadjah.netlify.app/' />


       <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/solve" element={<Solve />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
