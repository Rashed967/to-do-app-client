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



// get data from the server and store in it 




// get task data function 
addTaskFormElement.addEventListener("submit", getDataFromUser)






getDataFromServer()

// setDataToTheDom(fathedData)


    tableBodyElement.addEventListener("click", (e) => {
        
        if(e.target.classList.contains("taskDeleteBtn")){
            const id = e.target.getAttribute('data-id')
            deleteTask(id)
            
        }
        
    })
    

