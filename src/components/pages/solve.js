import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

export default function Solve() {
  function handleOnSubmit(e) {
    //prevent the page from refreshing
    e.preventDefault();

    let loanAmount = parseInt(document.getElementById("loanAmount").value);
    let months = parseInt(document.getElementById("months").value);

    //before the very first month
    let remainingBalance = [loanAmount];

    let interestRate = parseFloat(
      document.getElementById("interestRate").value
    );

    //Keep track of interest payments
    let interest = new Array();

    //Keep track of principal payments
    let principalPayments = new Array();

    //keep track of total interest
    let totalInterest = new Array();
    totalInterest.push(0);

    //Total Monthly Payment
    let totalMonthlyPayment =
      (loanAmount * (interestRate / 1200)) /
      (1 - Math.pow(1 + interestRate / 1200, -months));

    //END OF DECLARATIONS***

    //loop will iterate for however many times the user declares in terms of months
    for (let i = 0; i < months; i++) {
      //Interest
      interest.push(remainingBalance[i] * (interestRate / 1200));

      //principal payment
      principalPayments.push(totalMonthlyPayment - interest[i]);

      //totalInterest
      totalInterest.push(
        totalInterest[i] + (totalMonthlyPayment - principalPayments[i])
      );

      remainingBalance.push(remainingBalance[i] - principalPayments[i]);
    }

    //Creating and inputting user data into the table
    let tBody = "";
    for (let i = 0; i < months; i++) {
      tBody += `<tr> <td>${
        i + 1
      }</td>                                                                    
                       <td>$${(
                         Math.round(totalMonthlyPayment * 100) / 100
                       ).toFixed(2)}</td>             
                       <td>$${(
                         Math.round(principalPayments[i] * 100) / 100
                       ).toFixed(2)}</td>          
                       <td>$${(Math.round(interest[i] * 100) / 100).toFixed(
                         2
                       )}</td> 
                       <td>$${(
                         Math.round(totalInterest[i + 1] * 100) / 100
                       ).toFixed(2)}</td>
                       <td>$${(
                         Math.round(remainingBalance[i + 1] * 100) / 100
                       ).toFixed(2)}</td>
                 </tr>`;
    }
    document.getElementById("tBody").innerHTML = tBody;

    //Monthly Payment
    document.getElementById("monthlyPayment").innerHTML = `$${(
      Math.round(totalMonthlyPayment * 100) / 100
    ).toFixed(2)}`;

    //Bottom three outputs
    document.getElementById("totalPrincipalOutput").innerHTML = `$${(
      Math.round(loanAmount * 100) / 100
    ).toFixed(2)}`;
    document.getElementById("totalInterestOutput").innerHTML = `$${(
      Math.round(totalInterest[months] * 100) / 100
    ).toFixed(2)}`;
    document.getElementById("totalCostOutput").innerHTML = `$${(
      Math.round((loanAmount + totalInterest[months]) * 100) / 100
    ).toFixed(2)}`;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={4} className="square border border-dark"
          >
            <form onSubmit={handleOnSubmit}>
              <Row className="mt-3">
                <Col>
                  <label>Loan Amount($)</label>
                </Col>
                <Col md={5}>
                  <input
                    type="number"
                    className="form-control"
                    id="loanAmount"
                    placeholder="100000"
                  />
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <label for="Term">Term(Months)</label>
                </Col>
                <Col md={5}>
                  <input
                    type="number"
                    className="form-control"
                    id="months"
                    placeholder="60"
                  />
                </Col>
              </Row>
              <Row className="pt-3 pb-3">
                <Col>
                  <label for="Interest Rate">Interest Rate</label>
                </Col>
                <Col md={5}>
                  <input
                    type="number"
                    className="form-control"
                    id="interestRate"
                    placeholder="3.5%"
                  />
                </Col>
              </Row>
              <Row className="text-center">
                <Col className="pb-3">
                  <Button
                    className="btn btn-success"
                    type="submit"
                  >
                    Calculate
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
   


          <Col  className="square border border-success">
            <Row className="text-center">
              <Col>
                <h3>Your Monthly Payments</h3>
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <h2 id="monthlyPayment">$0.00</h2>
              </Col>
            </Row>


            <Container className="text-center">
              <Row className="text-center">
              <Col className="offset-2" style={{textAlign: "left"}}>
                <h5>Total Principal</h5>
              </Col>
              <Col>
                <h5 className="offset-2" id="totalPrincipalOutput" style={{textAlign: "left"}}>
                  $0.00
                </h5>
              </Col>
              </Row>

              <Row className="text-center">
              <Col className="offset-2" style={{textAlign: "left"}}>
                <h5>Total Interest</h5>
              </Col>

              <Col>
                <h5 className="offset-2" id="totalInterestOutput" style={{textAlign: "left"}}>
                  $0.00
                </h5>
              </Col>
              </Row>

              <Row className="text-center">
              <Col className="offset-2" style={{textAlign: "left"}}>
                <h5>Total Cost</h5>
              </Col>
              <Col>
                <h5 className="offset-2" id="totalCostOutput" style={{textAlign: "left"}}>$0.00</h5>
              </Col>
              </Row>
           </Container>


            <br />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Table striped bordered hover variant="success">
            <thead>
              <tr>
                <th>Month</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Total Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody id="tBody"></tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

Table.borderStyle = {
  borderStyle:"groove"
}

Table.borderWidth = {
  borderWidth:"1px"
}

Table.borderRadius = {
  borderRadius:"4px"
}

