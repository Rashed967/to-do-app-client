// import modules
import { getDom, getDataFromUser, getDataFromServer, setDataToTheDom} from "./utilities.js";


// get dom elements 
const addTaskFormElement = getDom("addTaskForm"),
taskNameElement = getDom("taskName"),
startDateElement = getDom("startDate"),
endDateElement = getDom("endDate"),
taskNoteElement = getDom("taskNote");
tableBodyElement = getDom("tableBody")



// get data from the server and store in it 

const data = getDataFromServer()



// get task data function 
addTaskFormElement.addEventListener("submit", getDataFromUser)

setDataToTheDom(data)