let n = document.getElementById("num")
let re = document.getElementById("result")
let a = document.getElementById("ans")
let items = []
function addData(){
    items.push(parseFloat(n.value))
    re.innerHTML = ""
    for (let i in items){
        re.innerHTML = re.innerHTML + i + " , "+ items[i]+"<br>"
    }
    n.value = ""
}
function addData1(){
    items.unshift(parseFloat(n.value))
    re.innerHTML = ""
    for (let i in items){
        re.innerHTML = re.innerHTML + i + " , "+ items[i]+"<br>"
    }
    n.value = ""
}

function computeData(){
    let sum = 1
    for(let data of items){
        if(data%2!=0){
            sum = sum*data
        }
    }
    a.innerHTML = "sum = "+sum
}
function computeData2(){
    let sum = 1

    for(let data of items){
        if(data%2==0){
            sum = sum*data
        }
    }
    a.innerHTML = "sum = "+sum
}

function resetData(){
    re.innerHTML = " "
    a.innerHTML = " "
    items = []
}