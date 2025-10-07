const resultBox = document.getElementById("result");
var firstpagehtml = resultBox.innerHTML
 function Calculate() {

    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const input3 = parseFloat(document.getElementById("input3").value);
    const repaymentType = document.getElementById("repayment").checked;
    const interestOnlyType = document.getElementById("interest-only").checked;

    const inputs = {input1,input2,input3,repaymentType,interestOnlyType};
     if (!input1 || !input2 || !input3) {
        resultBox.innerHTML = "<h1>Please enter the full form.</h1> <img src='i.sorry.png'  style='width: 60%; height: 40%;' >";
        resultBox.style.color = "white";
        resultBox.style.marginLeft = "50px";
        return;
    }
     
      const amount = input1 * input2 / 100 * input3; 
      const repayment = input1 + amount; 

     if (repaymentType) {
        resultBox.innerHTML = `<h3>Your results</h3>
            <p style="color: rgb(198, 194, 194);">Your results are shown below based on the information you provided. To adjust,edit the form and click"calculate repayment"again.</p>
            <br>
            <div style="border-top: 2px solid yellow; padding-top: 10px;">
            <p style="color: rgb(198, 194, 194);">Your total repayment :</p><br>
            <h1 style="color: yellow; "> £ ${repayment}</h1>
            </div>
            <hr style="color: rgba(196, 181, 181, 1);">
            <p style="color: rgb(198, 194, 194);">Total interest: 
            <br>
            <h3>£ ${amount}</h3></p>
        `;
        resultBox.style.color = "white";
        resultBox.style.marginLeft = "10%"; 
         resultBox.style.marginTop ="20%";
    } 
    else if (interestOnlyType) {
        resultBox.innerHTML = `<h3>Your results</h3>
            <p>Your results are shown below based on the information you provided. To adjust,edit the form and click"calculate interest only"again</p>
            <br>
              <div style="border-top: 2px solid yellow; padding-top: 10px;">
              <p style="color: rgb(198, 194, 194);">Your total interest :</p><br>
              <h1> £ ${amount}</h1>
              </div>
             <hr style="color: rgba(196, 181, 181, 1);">
            <p style="color: rgb(198, 194, 194);">Total repayment: 
            <br>
            <h3>£ ${repayment}</h3></p>
        `;
         resultBox.style.color = "white";
         resultBox.style.marginLeft = "10%";
         resultBox.style.marginTop ="20%";
    } 
     else {
    resultBox.innerHTML = `<h3>Your results</h3>
        <p>Amount calculated: <b>${amount}</b></p>`;
    resultBox.style.color = "white";
}

   
}


function clearAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("repayment").checked = false;
    document.getElementById("interest-only").checked = false;
    resultBox.innerHTML = firstpagehtml
    
        
    
}
