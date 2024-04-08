class Stack{
    constructor(){
        this.myList = []

    }
    isEmpyty(){
        return this.myList.length == 0
    }
    push(value){
        this.myList.push(value)

    }
    pop(){
        if(this.isEmpyty()){
            return " "
        }
        else {
        return this.myList.pop()
        }
    }
    peek(){
        return this.myList[this.myList.length-1]
    }
    stackDisplay(){
        for(let i = this.myList.length-1; i >=0 ;i--){
            console.log(this.myList[i])
        }
    }
}

// ---- main ----
let e = document.getElementById("exe")
let r = document.getElementById("result")

function displayInfixToPostfix(){
    let result = infixToPostfix(e.value)
    r.innerHTML = "result : "+result
}

function infixToPostfix(str){
    let output = ""
    let myStack = new Stack()
    let ch;
    for(let i = 0;i<str.length;i++){
        ch = str.charAt(i)
        if(ch == "("){
            myStack.push(ch)
            myStack.stackDisplay()
        }
        else if(checkOperator(ch)){
            while(!myStack.isEmpyty()&&checkPriority(ch)<=checkPriority(myStack.peek())){
                output = output+myStack.pop()
            }
            myStack.push(ch)
            myStack.stackDisplay()
        }
        else if(ch ==")"){
            while(!myStack.isEmpyty()&& myStack.peek() != "("){
                output = output+myStack.pop()
            }
            myStack.pop()
            myStack.stackDisplay()
        }
        else{
            output = output+ch
            console.log("output = ",output)
        }
    }
    while(!myStack.isEmpyty()){
        output = output+myStack.pop()
    }
    return output
}


function displayPostfixToInfix(){
    let result = postfixToInfix(e.value)
    r.innerHTML = result
}

function postfixToInfix(str){
    let myStack = new Stack()
    let ch, operand1, operand2;
    let stepByStep = ""; // เพิ่มตัวแปรเก็บข้อมูลขั้นตอนที่แปลงได้
    for(let i = 0; i < str.length; i++){
        ch = str.charAt(i)
        if(!checkOperator(ch)){
            myStack.push(ch)
            stepByStep += "Push: " + ch + "<br>"; // เพิ่มข้อมูลขั้นตอนการ push ลงในตัวแปร
        }
        else {
            operand2 = myStack.pop()
            operand1 = myStack.pop()
            let temp = '(' + operand1 + ch + operand2 + ')'
            myStack.push(temp)
            stepByStep += "Pop: " + operand1 + ", " + operand2 + "<br>"; // เพิ่มข้อมูลขั้นตอนการ pop และ push ลงในตัวแปร
            stepByStep += "Push: " + temp + "<br>";
        }
    }
    let finalResult = myStack.pop();
    stepByStep += "Final result: " + finalResult; // เพิ่มข้อมูลขั้นตอนการนำผลลัพธ์สุดท้ายออกมา
    return finalResult + "<br><br>" + stepByStep;
}





function checkOperator(c){
    if(c == "+"||c=="-"|| c=="*"|| c=="/" || c=="^"){
        return true
    }
    else{
        return false
    }
}

function checkPriority(c){
    if(c=="+"||c=="-"){
        return 1
    }
    else if (c=="*"||c=="/"){
        return 2
    }
    else if (c=="^"){
        return 3
    }
    else{
        return 0
    }
}