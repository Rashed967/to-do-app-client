// import modules
import { getDom, getDataFromUser, getDataFromServer} from "./utilities.js";


// get dom elements 
const addTaskFormElement = getDom("addTaskForm"),
taskNameElement = getDom("taskName"),
startDateElement = getDom("startDate"),
endDateElement = getDom("endDate"),
taskNoteElement = getDom("taskNote");



// get task data function 
addTaskFormElement.addEventListener("submit", getDataFromUser)

getDataFromServer()