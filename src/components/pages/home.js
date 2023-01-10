import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import MortgageManager from '../../images/MortgageManager.png';
import ReactLogo from "../../images/ReactLogo.png";
import BootstrapLogo from "../../images/BootstrapLogo.png";


function home() {
  return (
    <Row className="d-flex justify-content-center pt-5">
      <Col>
        <Row className="justify-content-center">
          <img
            className="col-3 pt-4 pb-2"
            src={MortgageManager}
            alt="MortgageManagerlogo"
            width={200}
            height={250}
          ></img>
        </Row>

        <hr />
        <Row className="row text-center d-flex justify-content-center">
          <Col>
            <h6>A palindrome is a word that has the same spelling forwards and backwards.</h6>

            <p>
               Enter a word and check if its a palindrome!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <Link className="btn btn-primary" to="/solve">
              Check it Out
            </Link>
          </Col>
        </Row>

        <hr />

        <Row className="d-flex justify-content-center">
          <img
            className="col-3 "
            
            src={ReactLogo}
            alt="React"
            width={150}
            height={185}
          ></img>
          <img
            className="offset-1 col-3 "
            
            src={BootstrapLogo}
            alt="Badges"
            width={150}
            height={185}
          ></img>
        </Row>
      </Col>
    </Row>



  )
}

export default home