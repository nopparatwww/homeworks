class NodeData{
    constructor(elem){
        this.element = elem
        this.nextleft = null
        this.nextright = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null

    }

    addRecursive(current,elem){
        if(current == null){
            return new NodeData(elem)
        }
        if(elem < current.element){
            current.nextleft = this.addRecursive(current.nextleft,elem)
        }
        else if(elem > current.element){
            current.nextright = this.addRecursive(current.nextright,elem)
        }
        else{
            return current
        }
        return current
    }
    
    add(elem){
        this.root = this.addRecursive(this.root,elem)
    }

    preOrder(n,str){
        if(n != null){
            str = str+n.element+" "
            str = this.preOrder(n.nextleft,str)
            str = this.preOrder(n.nextright,str)
        }
        return str
    }
    inOrder(n,str){
        if(n != null){
            str = this.inOrder(n.nextleft,str)
            str = str+n.element+" "
            str = this.inOrder(n.nextright,str)
        }
        return str
    }

    postOrder(n,str){
        if(n != null){
            str = this.postOrder(n.nextleft,str)
            str = this.postOrder(n.nextright,str)
            str = str+n.element+" "
        }
        return str
    }
}

let n = document.getElementById("noo")
let r = document.getElementById("res")
let a = document.getElementById("aes")
let i = document.getElementById("ies")
let p = document.getElementById("pes")
let bst = new BinarySearchTree()
let dato = []
let str = ""

//join ช่วยรวบรวมข้อมูลในarray or linklist จะทำให้ข้อมูลเป็นstrรวบรวมข้อมูลได้ง่ายขึ้น

function addInput(){
    let value = parseInt(n.value);
    bst.add(value);
    dato.push(value)
    n.value = ""
    es = dato.join(", ")
    r.innerHTML = "Data = "+ es
}

function inOr(){
    i.innerHTML ="In Order : " + bst.inOrder(bst.root,str);
}

function postOr(){
    p.innerHTML ="Post Order : "+ bst.postOrder(bst.root,str)
}

function preOr(){
    aes.innerHTML ="Pre Order : "+ bst.preOrder(bst.root,str)
}
