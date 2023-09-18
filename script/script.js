// import modules
import { getDom, getDataFromUser, getDataFromServer, setDataToTheDom, fathedData} from "./utilities.js";


// get dom elements 
const addTaskFormElement = getDom("addTaskForm"),
taskNameElement = getDom("taskName"),
startDateElement = getDom("startDate"),
endDateElement = getDom("endDate"),
taskNoteElement = getDom("taskNote"),
tableBodyElement = getDom("tableBody"),
taskDeleteBtnElement = getDom("taskDeleteBtn")



// get data from the server and store in it 

// console.log(fathedData)



// get task data function 
addTaskFormElement.addEventListener("submit", getDataFromUser)






getDataFromServer()
// setDataToTheDom(fathedData)