import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import { Router } from "../../routes/router"
import { reducer } from "../../redux/reducers"
import { getStore } from "../../redux/store"

import styles from "../delete/styles.module.scss"

const cancelButton = button("cancel")
const deleteButton = button("delete")


const deletePage = function (props) {
    // Event Handler for removing task
    function onDeleteTaskWithId(e){
        // const task = getStore().find(task=>{
        //     return task.id === props.id
        // })
        // console.log(task)
        const index = getStore().findIndex(task=> task.id === props.id)
        // send index to the reducer
        // have the reducer remove the task
        //Reducer
        const action ={
            type:"delete",
            payload:{index},
            cb: ()=> cleanUp()
        }
        reducer(action)
        Router('/todo')
    }
    deleteButton.addEventListener('click', onDeleteTaskWithId)
    function cleanUp(){
        cancelButton.removeEventListener('click', onCancelDelete)
        deleteButton.removeEventListener('click', onDeleteTaskWithId)
    }
    function onCancelDelete(e){
        //clean up remove listeners cancel delete
        cleanUp();
        Router('/todo');
    }
    cancelButton.addEventListener('click', onCancelDelete)
    const page = document.createElement('div')
    let headerTemplate = `
        <header class="welcome center-in-page ${Object.values(props)[4]}">
            <h1>Delete Task</h1>
                <p>Delete Task ${Object.values(props)[1]}</p>
                <p>${Object.values(props)[2]}</p>  
            <div></div>
        </header>
        `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page
}

export default deletePage