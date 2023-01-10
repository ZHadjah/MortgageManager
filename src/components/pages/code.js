import Prism from 'prismjs';
import "../../styles/prism.css";


function code() {
  return (
    <div className="row">
        <div className="col pt-1">
          <pre className="language-javascript" tabIndex={0}>
            <code className="language-javascript">
              {`
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
                    tBody += \`<tr> <td>\${
                      i + 1
                    }</td>                                                                    
                      <td>\${(
                        Math.round(totalMonthlyPayment * 100) / 100
                      ).toFixed(2)}</td>             
                      <td>\${(
                        Math.round(principalPayments[i] * 100) / 100
                      ).toFixed(2)}</td>          
                      <td>\${(Math.round(interest[i] * 100) / 100).toFixed(
                        2
                      )}</td> 
                      <td>\${(
                        Math.round(totalInterest[i + 1] * 100) / 100
                      ).toFixed(2)}</td>
                      <td>\${(
                        Math.round(remainingBalance[i + 1] * 100) / 100
                      ).toFixed(2)}</td>
                      </tr>\`;
                  }
                  document.getElementById("tBody").innerHTML = tBody;
              
                  //Monthly Payment
                  document.getElementById("monthlyPayment").innerHTML = '\${(
                    Math.round(totalMonthlyPayment * 100) / 100
                  ).toFixed(2)}';
              
                  //Bottom three outputs
                  document.getElementById("totalPrincipalOutput").innerHTML = '\${(
                    Math.round(loanAmount * 100) / 100
                  ).toFixed(2)}';
                  document.getElementById("totalInterestOutput").innerHTML = '\${(
                    Math.round(totalInterest[months] * 100) / 100
                  ).toFixed(2)}';
                  document.getElementById("totalCostOutput").innerHTML = '\${(
                    Math.round((loanAmount + totalInterest[months]) * 100) / 100
                  ).toFixed(2)}';
                }               
            `}
          </code>
        </pre>
      </div>
    </div>
  )
}
export default code