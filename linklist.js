//---- Class Node -----
class Node{
    constructor(elem){
        this.element = elem
        this.next = null
    }
}

//---- Class Link List ----
class LinkedList{
    constructor(){
        this.firstNode = null
        this.lastNode = null
        this.lenght = 0
    }

    push(value){
        const newNode = new Node(value)
        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }
        else{
            this.lastNode.next = newNode
            this.lastNode = newNode
        }
        this.lenght++
        return this
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }
        else{
            newNode.next = this.firstNode
            this.firstNode = newNode
        }
        this.lenght++
        return this
    }

    get(index){
        if(index<0||index>=this.lenght){
            return undefined
        }
        let curentNode = this.firstNode
        for(let i = 0 ; i<index;i++){
            curentNode = curentNode.next
        }
        return curentNode
    }
    insert(index,value){
        if(index < 0 || index > this.lenght){
            return false
        }
        if(index === 0){
            return this.unshift(value)
        }
        if(index === this.lenght){
            return this.push(value)
        }
        const newNode = new Node(value)
        let beforeNode = this.get(index-1)
        newNode.next = beforeNode.next
        beforeNode.next = newNode
        this.lenght++
        return this
    }

    pop(){
        if(this.lenght === 0){
            return undefined
        }
        let curentNode = this.firstNode
        let beforeNode = this.firstNode
        while(curentNode.next != null){
            beforeNode = curentNode
            curentNode = curentNode.next
        }
        this.lastNode = beforeNode
        this.lastNode.next = null
        this.lenght--
        if(this.lenght === 0){
            this.firstNode = null
            this.lastNode = null
        }
        return curentNode
    }
    shift(){
        if(this.lenght === 0){
            return undefined
        }
        let curentNode = this.firstNode
        this.firstNode = this.firstNode.next
        curentNode.next = null
        this.lenght--
        if(this.lenght === 0){
            this.lastNode = null
        }
        return curentNode
    }
    remove(index){
        if(index <0 || index >= this.lenght){
            return undefined
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.lenght-1){
            return this.pop()
        }
        let curentNode = this.get(index)
        let beforeNode = this.get(index-1)
        beforeNode.next = curentNode.next
        curentNode.next = null
        this.lenght--
        return curentNode
    }
    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.element = value
            return true
        }
        return false
    }
}



let r = document.getElementById("result")
let d = document.getElementById("data")
let mylist = new LinkedList()
console.log(mylist)
mylist.set(2,"g")
//let data = mylist.set(2)
//console.log ("Data dlete = ",data.element)
console.log(mylist)
function pushData(){
    mylist.push(d.value)
    console.log(mylist)
    displayData()
    d.value = ""
}

function popData(){
    mylist.pop(d.value)
    console.log(mylist)
    displayData()
    d.value=""
}

function unshiftData(){
    mylist.unshift(d.value)
    console.log(mylist)
    displayData()
    d.value=""
}

function shiftData(){
    mylist.shift(d.value)
    console.log(mylist)
    displayData()
    d.value=""
}

function getData() {
    let index = parseInt(document.getElementById("indexInput").value); // ดึงค่าลำดับของข้อมูลที่ต้องการเปลี่ยนแปลงจาก input
    let data = mylist.get(index); // เรียกใช้เมธอด get() เพื่อดึงข้อมูลจากลิงค์ลิสต์
    let aes = document.getElementById("aesd"); // เลือก element ที่ต้องการแสดงข้อมูล

    if (data !== undefined && data !== null) { // ตรวจสอบว่า data ไม่เป็น null หรือ undefined
        aes.innerHTML = "ข้อมูลใน index คือ : " + data.element;
    } 
    else {
        aes.innerHTML = "ไม่พบข้อมูลใน index -_- ";
    }
    displayData(); // เรียกใช้ฟังก์ชัน displayData() เพื่อแสดงข้อมูลทั้งหมดในลิงค์ลิสต์
    d.value = ""; // เคลียร์ค่าใน input
}

function setData() {
    let index = parseInt(document.getElementById("indexInput").value); // ดึงค่าลำดับของข้อมูลที่ต้องการเปลี่ยนแปลงจาก input
    let newValue = document.getElementById("newValueInput").value; // ดึงค่าใหม่ที่ต้องการตั้งค่าในลิงค์ลิสต์จาก input
    let aes = document.getElementById("aesd"); // เลือก element ที่ต้องการแสดงข้อมูล
    let suc = mylist.set(index, newValue); // เรียกใช้เมธอด set() เพื่อเปลี่ยนแปลงค่าในลิงค์ลิสต์

    if (suc) { // ตรวจสอบว่าการเปลี่ยนแปลงค่าสำเร็จหรือไม่
        aes.innerHTML = ("การตั้งค่าข้อมูลในลิงค์ลิสต์สำเร็จ")
    } 
    else {
        aes.innerHTML = ("ไม่สามารถตั้งค่าข้อมูลในลิงค์ลิสต์ได้")
    }

    displayData(); // เรียกใช้ฟังก์ชัน displayData() เพื่อแสดงข้อมูลทั้งหมดในลิงค์ลิสต์
    index.value = " "; // เคลียร์ค่าใน input สำหรับลำดับของข้อมูล
    newValue.value = " "; // เคลียร์ค่าใน input สำหรับค่าใหม่
}

function insertData() {
    let index = parseInt(document.getElementById("indexInput").value); // ดึงค่าลำดับที่ต้องการแทรกข้อมูล
    let value = document.getElementById("newValueInput").value; // ดึงค่าที่ต้องการแทรก

    let aes = document.getElementById("aesd"); // เลือก element ที่ต้องการแสดงข้อมูล

    let success = mylist.insert(index, value); // เรียกใช้เมธอด insert() เพื่อแทรกข้อมูล

    if (success) { // ตรวจสอบว่าการแทรกสำเร็จหรือไม่
        aes.innerHTML = "การแทรกข้อมูลในลิงค์ลิสต์สำเร็จ";
    } 
    else {
        aes.innerHTML = "ไม่สามารถแทรกข้อมูลในลิงค์ลิสต์ได้";
    }

    displayData(); // เรียกใช้ฟังก์ชัน displayData() เพื่อแสดงข้อมูลทั้งหมดในลิงค์ลิสต์
    d.value = ""; // เคลียร์ค่าใน input สำหรับค่าที่ต้องการแทรก
}

function removeData() {
    let index = parseInt(document.getElementById("indexInput").value); // ดึงค่าลำดับที่ต้องการลบข้อมูล

    let aes = document.getElementById("aesd"); // เลือก element ที่ต้องการแสดงข้อมูล

    let removedNode = mylist.remove(index); // เรียกใช้เมธอด remove() เพื่อลบข้อมูล

    if (removedNode !== undefined && removedNode !== null) { // ตรวจสอบว่าข้อมูลถูกลบออกจาก LinkedList หรือไม่
        aes.innerHTML = "ข้อมูลที่ถูกลบ: " + removedNode.element;
    } 
    else {
        aes.innerHTML = "ไม่สามารถลบข้อมูลในลิงค์ลิสต์ได้";
    }

    displayData(); // เรียกใช้ฟังก์ชัน displayData() เพื่อแสดงข้อมูลทั้งหมดในลิงค์ลิสต์
}



function displayData(){
    r.innerHTML = " "
    for(let i = 0;i<mylist.lenght;i++){
        let data = mylist.get(i)
        r.innerHTML=r.innerHTML+data.element+" "
        if(i != mylist.lenght-1){
            r.innerHTML = r.innerHTML+"==> "
        }
    }
}

