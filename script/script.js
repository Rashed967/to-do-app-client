// import modules
import { getDom, getDataFromUser, getDataFromServer, setDataToTheDom, fathedData, deleteTask} from "./utilities.js";


// get dom elements 
const addTaskFormElement = getDom("addTaskForm"),
taskNameElement = getDom("taskName"),
startDateElement = getDom("startDate"),
endDateElement = getDom("endDate"),
taskNoteElement = getDom("taskNote"),
tableBodyElement = getDom("tableBody"),
taskDeleteBtnElement = getDom("taskDeleteBtn")



// get task data function 
addTaskFormElement.addEventListener("submit", getDataFromUser)


// setDataToTheDom(fathedData)
getDataFromServer()


// call delete task function 
    tableBodyElement.addEventListener("click", (e) => {   
        if(e.target.classList.contains("taskDeleteBtn")){
            const id = e.target.getAttribute('data-id')
            deleteTask(id)   
        } 
        
        if(e.target.getAttribute('id') === 'checked'){
            const checkedButton = document.getElementById("checked")
            const dataStatus = document.getElementById("dataStatus").innerText
            console.log(checkedButton, dataStatus)
        }
        
    })
    

