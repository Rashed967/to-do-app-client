export function sayHello(){
    console.log("Hello from utility js");
}


// get dom element 
export function getDom(domId){
    const domElement = document.getElementById(domId)
    return domElement
}

// global variable
export let fathedData = [];


// get task data function 
export function getDataFromUser(event){
    event.preventDefault();
    const form = event.target,
    taskName = form.taskName.value,
    startDate = form.startDate.value,
    endDate = form.endDate.value,
    taskNote = form.taskNote.value;
    if(isNaN(taskName) && isNaN(startDate) && isNaN(endDate) && isNaN(taskNote)){

        const newTask = {
            "name" : taskName,
            "id" : generateId(),
            "startDate" : startDate,
            "endDate" : endDate,
            "note" : taskNote,
            "status" : "incomplete"
        }
        console.log(newTask);
        sendDataToTheServer(newTask)
        getDataFromServer()
    }
}



// generate unique id 
function generateId(){
    const id = Math.floor(Math.random() * 10000000)
    return id
}


// function to delete task 
// function deleteTask(){
//     console.log("hello from user")
// }



// send data to the server 
function sendDataToTheServer(itemToSend){
    fetch("http://localhost:3000/api/send-data", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(itemToSend)
    })

    .then(res => res.json())
    .then(data =>  {
        console.log(data)
    })
    .catch((error) => {
        console.error(error)
    })
}


// function to get data form server 
export function getDataFromServer(){
     fetch("http://localhost:3000/api/send-data")
    .then(res => res.json())
    .then(data => {
       if(!data.length - 1){

           setDataToTheDom(data)
       }
       
    })
    .catch((error) => {
        console.error(error)
    })
}


// function to update dom 

export function setDataToTheDom(data){
    const tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = ""

    if(!data.length - 1){
        data.forEach(data => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${data.name}</td>
            <td>${data.startDate}</td>
            <td>${data.endDate}</td>
            <td>${data.status}</td>
            <td id="buttonBox">
                <input  type="checkbox" name="" id="checked" >
                <button id="taskDeleteBtn" >D</button>
            </td>
            `
            tableBody.appendChild(tr)
            
        });
    }
    
}







// console.log(fathedData)
// setDataToTheDom(fathedData)