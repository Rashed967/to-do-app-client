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
    console.log(taskName, startDate, endDate, taskNote);
}

