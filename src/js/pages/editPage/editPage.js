import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import { Router } from "../../routes/router"
import { reducer } from "../../redux/reducers"
import { getStore } from "../../redux/store"


const cancelButton = button("cancel")
const editButton = button("edit")

const editPage = function(props) {
 // Event Handler for removing task
    function onEditTask(e){
        // const task = getStore().find(task=>{
        //     return task.id === props.id
        // })
        // console.log(task)
        const index = getStore().findIndex(task=> task.id === props.id)
        // send index to the reducer
        // have the reducer remove the task
        //Reducer
        const action ={
            type:"edit",
            payload:{index},
            cb: ()=> cleanUp()
    }
    reducer(action)
    Router('/todo')
}

    function cleanUp(){
        cancelButton.removeEventListener('click', onCancelEdit)
        editButton.removeEventListener('click', onEditTask)
    }
    function onCancelEdit(e){
        //clean up remove listeners cancel delete
        cleanUp();
        Router('/todo');
    }
    cancelButton.addEventListener('click', onCancelEdit)
    const page = document.createElement('div')
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Edit To-Do</h1>
                <form>
                <label for="category">Category:</label><br>
                <input type="text" id="category" name="category" value="${Object.values(props)[4]}"><br>

                <label for="completed">Completed:</label><br>
                <input type="checkbox" id="completed" name="completed" value="${Object.values(props)[3]}"><br>

                <label for="to-do">Description:</label><br>
                <input type="text" id="description" name="description" value="${Object.values(props)[1]}"><br>

                <label for="end-date">End Date:</label><br>
                <input type="text" id="enddate" name="end-date" value="${Object.values(props)[2]}"><br>

                </form>
            <div></div>
        </header>
        `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)

    return page
}

export default editPage