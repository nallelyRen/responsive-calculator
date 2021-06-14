let buttons = document.querySelectorAll('button')
let keys = document.querySelector('.calculator__keys');
let displayText = document.querySelector('.display');
let displaySec=document.querySelector('.display__secondary');
//limits the decimal points
let point = false;
//limits the operators
let operator = false;
let num1;
let num2;
let result;
let op;
let counter='';


if (keys) {
    keys.addEventListener('click', btn => {
        if (btn.target.matches('button')) {
            const key = btn.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const ActualNum = displayText.textContent;
            //write the numbers
            if (!action) {
                if (ActualNum == "0") {
                    displayText.textContent = keyContent;
                    operator = false;  
                    
                } else {
                    displayText.textContent = ActualNum + keyContent;
                    operator = false;                  
                   
                }
            }
            //write the decimal point
            if (action == "decimal" && !point) {
                displayText.textContent = ActualNum + '.';
                point = true;
            }

            //write the operators
            switch (action) {
                case 'add':
                    if (!operator) {                        
                        if(counter=='add'){
                            num2=Number(ActualNum);                              
                            displayText.textContent='0'; 
                            op= '+';
                            num1=calculate();
                            displaySec.textContent =num1+'+';                            
                        }else{
                        displaySec.textContent='';
                        num1=Number(ActualNum);
                        op= '+';
                        displaySec.textContent=   displaySec.textContent +ActualNum+ '+';                        
                        displayText.textContent='0';      
                        }
                                         
                        counter='add';
                        operatorPresssed();

                    }
                    break
                case 'subtract':
                    if (!operator) {                        
                        if(counter=='subtract'){
                            num2=Number(ActualNum);                              
                            displayText.textContent='0'; 
                            op= '-';   
                            num1=calculate();
                            displaySec.textContent =num1+'-';                            
                        }else{
                        displaySec.textContent='';
                        num1=Number(ActualNum);
                        op= '-';                        
                         displaySec.textContent=   displaySec.textContent +ActualNum+ '-';
                         displayText.textContent='0';  
                    }    
                    counter='subtract';                  
                        operatorPresssed();
                    }
                    break
                case 'multiply':
                    if (!operator) {
                        if(counter=='multiply'){
                            num2=Number(ActualNum);                              
                            displayText.textContent='0'; 
                            op= 'x';   
                            num1=calculate();
                            displaySec.textContent =num1+'x';                            
                        }else{
                        displaySec.textContent='';
                        num1=Number(ActualNum);
                        op= 'x';                       
                         displaySec.textContent=   displaySec.textContent +ActualNum+ 'x';
                         displayText.textContent='0';      
                        }    
                        counter='multiply';             
                        operatorPresssed();
                    }
                    break
                case 'divide':
                    if (!operator) {
                        if(counter=='divide'){
                            num2=Number(ActualNum);                              
                            displayText.textContent='0'; 
                            op= '/';   
                            num1=calculate();
                            displaySec.textContent =num1+'/';                            
                        }else{
                        displaySec.textContent='';
                        num1=Number(ActualNum);
                        op= '/';
                        displaySec.textContent=   displaySec.textContent +ActualNum+ '/';
                         displayText.textContent='0';  
                    }        
                    counter='divide';             
                        operatorPresssed();
                    }
                    break
                case 'clear':
                    displayText.textContent = '0';
                    displaySec.textContent = '';
                    num1=null;
                    num2=null;
                    counter='';
                    operatorPresssed();
                    

                    break
                case 'calculate':
                    displaySec.textContent=   displaySec.textContent +ActualNum;
                    num2=Number(ActualNum);                    
                    displayText.textContent =calculate();
                    num2=null;
                    num1=null;
                    operator = false;
                    
                    break
            }
        }

    })
}
function operatorPresssed() {
    operator = true;
    point = false;
}
function calculate() {   
    switch (op) {
    case '+':        
            return num1+num2;        
        break
    case '-':
        return num1-num2;
        
        break
    case 'x':
        return num1*num2;
        break
    case '/':
        return num1/num2;
        break
    }
}