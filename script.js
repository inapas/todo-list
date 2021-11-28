"use strict"

let task = document.getElementById("task")
let priority = document.getElementById("priority")
let myTable = document.querySelector("tbody")

let myButton = document.getElementById("sub-btn")

myButton.addEventListener("click", function(e){
    e.preventDefault();
    addToDo();
})

function addToDo(){
    
    if(task.value!==""&&priority.value!=="Choose Priority"){  
        const myRow=document.createElement("tr")
        myTable.appendChild(myRow)
        const myCol=document.createElement("td")
        const myCol1=document.createElement("td")
        myCol.textContent=task.value
        myRow.appendChild(myCol)
       
        const myPriority=document.createElement('p')
         myPriority.innerText=priority.value
        switch(priority.value){
            case 'High':
                myPriority.className="btn btn-warning"
                break;
            case 'Normal':
                myPriority.className="btn btn-success"
                break;
            case 'Low':
                myPriority.className="btn btn-info"
                break;
        }
        myCol1.appendChild(myPriority)
        myRow.appendChild(myCol1)

    
        priority.value = "Choose Priority"
        task.value = " "

        const myCol2=document.createElement("td")
        const deleteBtn=document.createElement("button")
        deleteBtn.innerText="Delete"
        deleteBtn.className="btn btn-danger delete-btn"
        myCol2.appendChild(deleteBtn)
        myRow.appendChild(myCol2)

        deleteBtn.addEventListener("click", function(){
            myTable.removeChild(myRow)
        })
        
    }else{
        alert("select all fields")
    }
}


       