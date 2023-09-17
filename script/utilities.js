export function sayHello(){
    console.log("Hello from utility js");
}


// get dom element 
export function getDom(domId){
    const domElement = document.getElementById(domId)
    return domElement
}


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
        }
        console.log(newTask);
        sendDataToTheServer(newTask)
    }
}




// generate unique id 
function generateId(){
    const id = Math.floor(Math.random() * 10000000)
    return id
}




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
    .then(data => {
        console.log("Data from server", data);
    })
    .catch(error => {
        console.log("Error from server", error);
    })
}